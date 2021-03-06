$(function () {
        $('#container5').highcharts({


            chart: {
                type: 'areaspline',
                 style:{
                    fontFamily:'serif'
                }
            },
            title: {
                text: 'Commitments of Georgia prison inmates 2000 - 2013'
            },
            subtitle: {
                text: 'Woman',
                
                align : 'left',
                style:{
                    fontSize: '18px'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: [
                    '2000',
                    '2001',
                    '2002',
                    '2003',
                    '2004',
                    '2005',
                    '2006',
                    '2007',
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                ],
                plotBands: [{ // visualize the weekend
                    from: 9,
                    to: 13,
                    color: 'rgba(68, 170, 213, .2)'
                }]
            },
            yAxis: [{
                title: {
                    text: 'African American Female'
                },
                height: '45%',
                max:1300,
            },
                {
                   title: {
                    text: 'White Female' 
                },
                offset:0,
                top: '50%',
                height: '45%',
                max:1300,
            }           
            ],
            tooltip: {
                shared: true,
                valueSuffix: null
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'African American Female',
                data: [1094,1019,1007,1063,1045,925,999,981,1041,1063,958,871,769,706]
            }, {
                yAxis: 1,
                name: 'White Female',
                data: [811,830,876,1078,1076,1164,1228,1323,1165,1205,1214,1111,1034,1114]
            },
            ]
        });
    });

$(function () {
        $('#container6').highcharts({


            chart: {
                type: 'areaspline',
                 style:{
                    fontFamily:'serif'
                }
            },
            title: {
                text: null
            },
            subtitle: {
                text: 'Man',
                
                align : 'left',
                style:{
                    fontSize: '18px'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: [
                    '2000',
                    '2001',
                    '2002',
                    '2003',
                    '2004',
                    '2005',
                    '2006',
                    '2007',
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                ],
                plotBands: [{ // visualize the weekend
                    from: 9,
                    to: 13,
                    color: 'rgba(68, 170, 213, .2)'
                }]
            },
            yAxis: [
                {
                   title: {
                    text: 'African American Male' 
                },
                offset:0,
                height: '45%',
                max:12000,
            }, 
            {
                   title: {
                    text: 'White Male' 
                },
                offset:0,
                top: '50%',
                height: '45%',
                max:12000,
            }            
            ],
            tooltip: {
                shared: true,
                valueSuffix: null
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                
                name: 'African American Male',
                data: [10276,10415,9850,10790,10811,10436,11503,11430,11914,12302,11798,11280,10440,9940]
             }, {
                yAxis: 1,
                name: 'White Male',
                data: [5238,5349,5565,5792,6196,6406,6675,6447,5957,6086,6262,6262,6026,5986]
            
            },
            ]
        });
    });

 
 $(document).ready(function() {
    $('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display hover" id="example"></table>' );
 
    $('#example').dataTable( {
        "data": dataSet,
        "columns": [
            { "title": "Year" },
            { "title": "African American Female" },
            { "title": "African American Male" },
            { "title": "White Female", "class": "center" },
            { "title": "White Male", "class": "center" }
        ]
    } );   
} );
    
var dataSet= [
        ['1971','173','2965','94','2285'],
        [  '1972', '214',  '3166', '103',  '2283'],
        [   '1973',  '226',  '3236', 134,  2519],
		[   1974,  242,  3385,  159,  3018],
		[   1975,  282,  4031,  185,  3076],
		[   1976, 276, 3448, 164, 2733],
		[   1977,  324,  3585,  197,  2925],
		[   1978,  306,  3401,  201,  2959],
		[   1979,  362,  3849,  217,  3182],
		[   1980,  334,  4316,  256,  3558],
		[   1981,  419,  5080,  349,  4201],
		[   1982,  432,  5452,  318,  4457],
		[   1983,  519,  6016,  405,  4893],
		[   1984,  517,  5909,  388,  5179],
		[   1985,  547,  6436,  392,  5465],
		[   1986,  646,  7684,  460,  6084],
		[   1987,  734,  8378,  453,  6081],
		[   1988,  779,  9056,  441,  5663],
		[   1989,  1030,  11369,  572,  5972],
		[   1990,  1172,  12304,  564,  6110],
		[   1991,  1360,  12614,  646,  6016],
		[   1992,  1109,  11439,  611,  5318],
		[   1993,  1092,  10613,  574,  5105],
		[   1994,  1025,  10677,  533,  5139],
		[   1995,  1043,  10087,  618,  4846],
		[   1996,  1027,  9809,  632,  4889],
		[   1997,  1079,  10860,  722,  5399],
		[   1998,  1176,  11382,  744,  5839],
		[   1999,  1072,  10301,  772,  5038],
		[   2000,  1094,  10276,  811,  5238],
		[   2001,  1019,  10415,  830,  5349],
		[   2002,  1007,  9850,  876,  5565],
		[   2003,  1063,  10790,  1078,  5792],
		[   2004,  1045,  10811,  1076,  6196],
		[   2005,  925,  10436,  1164,  6406],
		[   2006,  999,  11503,  1228,  6675],
		[   2007,  981,  11430,  1323,  6447],
		[   2008,  1041,  11914,  1165,  5957],
		[   2009,  1063,  12302,  1205,  6086],
		[   2010,  958,  11798,  1214,  6262],
		[   2011,  871,  11280,  1111,  6262],
		[   2012,  769,  10440,  1034,  6026],
		[   2013,  706,  9940,  1114,  5986],
        ];