import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ProgressRadial extends Component {
  constructor(props) {
    super(props);
        this.state = {
          options: {
            labels: ['TS', '2Type', 'DAT', 'OtherTesting', 'Products'],
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '18px',
                },
                total: {
                  show: true,
                  label: 'Fast Blood',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          series: [40, 10, 15, 240, ,10],
        }
      }

      render() {
        return (
          

          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="350" />
          </div>
  

        );
      }
    }

export default ProgressRadial;
