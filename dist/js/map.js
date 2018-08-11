
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.714405, lng:  9.0131313},
        zoom: 5.7
    });

    var marker1 = new google.maps.Marker({
        position: {lat: 51.507374, lng:  -0.127677},
        map: map,
        icon:'../images/svg/map-pin.svg'
    });

    var marker2 = new google.maps.Marker({
        position: {lat: 50.072583, lng:  14.437261},
        // 51.507374, -0.127677
        map: map,
        icon:'../images/svg/map-pin.svg'
    });


    INFWOverlay.prototype = new google.maps.OverlayView();

    /**
     * Custom Infoview constructor
     */
    function INFWOverlay(content, map, point, width) {
        // Инициализация
        this.width_ = width;
        this.point_ = point;
        this.content_ = content;
        this.map_ = map;

        // переменная для хранения DOM контейнера
        this.div_ = null;

        // подключим overlay к карте
        this.setMap(map);
    }

    /**
     * Операции при добавлении overlay на карту
     */
    INFWOverlay.prototype.onAdd = function() {
        var CIW = this;

        var div = document.createElement('div');
        div.style.border = 'none';
        div.style.borderWidth = '0px';
        div.style.position = 'absolute';
        // здесь я задал нужный мне класс, для которого буду
        // затем создавать каскадные стили
        div.classList.add('customInfoWindow');
        // добавим HTML контент
        div.innerHTML = CIW.content_;
        // займемся созданием кнопки Close (крестик в углу)
        var divClose = document.createElement('div');
        divClose.classList.add('close');
        divClose.addEventListener('click', function (e) {
            CIW.toggle();
        });
        // добавим крестик в окно
        div.appendChild(divClose);
        CIW.div_ = div;

        // добавим элемент в набор pane overlayimage нашей карты
        var panes = CIW.getPanes();
        panes.overlayImage.appendChild(CIW.div_);
    };


    /**
     * эта функция позволяет позиционировать окно на карте
     * во время прорисовки
     */
    INFWOverlay.prototype.draw = function() {
        // получим доступ к т.н. проекции окна
        var overlayProjection = this.getProjection();

        // проекция позволяет нам вычислить позицию окна
        // относительно документа, переводя гео координаты
        // в x,y канваса на экране
        var sw = overlayProjection.fromLatLngToDivPixel(this.point_);
        var div = this.div_;
        div.style.left = (sw.x) + 'px';
        div.style.top = (sw.y) + 'px';
        div.style.width = (this.width_) + 'px';
        div.style.height = 'auto';
    };

    /**
     * Далее идут функции реализующие удаление, скрытие окна
     * они не требуют подробного описания
     * и не отличаются от примера в руководстве от Гугл.
     */
    INFWOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
    };

// Set the visibility to 'hidden' or 'visible'.
    INFWOverlay.prototype.hide = function() {
        if (this.div_) {
            // The visibility property must be a string enclosed in quotes.
            this.div_.style.visibility = 'hidden';
        }
    };

    INFWOverlay.prototype.show = function() {
        if (this.div_) {
            this.div_.style.visibility = 'visible';
        }
    };

    INFWOverlay.prototype.toggle = function() {
        if (this.div_) {
            if (this.div_.style.visibility === 'hidden') {
                this.show();
            } else {
                this.hide();
            }
        }
    };

    // Detach the map from the DOM via toggleDOM().
    // Note that if we later reattach the map, it will be visible again,
    // because the containing <div> is recreated in the overlay's onAdd() method.
    INFWOverlay.prototype.toggleDOM = function() {
        if (this.getMap()) {
            // Note: setMap(null) calls OverlayView.onRemove()
            this.setMap(null);
        } else {
            this.setMap(this.map_);
        }
    };

    var overlay = new INFWOverlay($('#address1Wrapp').html(),
        map, // карта
        marker1.position // точка на карте
        // 200 // ширина окна);
    );

    var overlay2 = new INFWOverlay($('#address2Wrapp').html(),
        map, // карта
        marker2.position // точка на карте
        // 200 // ширина окна);
    );

// покажем окно
    overlay.show();
    overlay2.show();
}
