var smartgrid = require('smart-grid');

var settings={
	columns:24,
	offset:'15px',
	outputStyle:'scss',
	oldSizeStyle:false,
	container:{
		maxWidth:'1000px',
		fields:'10px'
	},
	breakPoints:{
		lg:{
			width:'1220px'
		},
        md:{
			width:'992px'
		},
		sm:{
			width:'768px'
		},
        xs:{
			width:'480px'
		}
	}

}

smartgrid('app/precss/',settings);