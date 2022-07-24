jQuery(function ($) {



    var options = {
        series: [70],
        chart: {
        height: "125",
        type: 'radialBar',
        width: '100%',
      },
      plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "70%"
            },
            dataLabels: {
                showOn: "always",
                name: {
                    show: false,
                },
                value: {
                    color: '#FFAA00',
                    fontSize: "18",
                    fontWeight: '400',
                    offsetY: 3,
                    show: true,
                    formatter: function (val) {
                        return val + '%';
                    }
                }
            },
        
        },
        track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#f2f2f2',
            strokeWidth: "100%",
            opacity: .5,
      
        
        },
      },

      labels: [''],
      colors: ['#FFAA00'],
      stroke: {
          lineCap: "butt",
      },

      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
      $(".searchForm-control").focus(function(){
        $(".searchIcon svg path").css("fill","white")
      })
   
});

