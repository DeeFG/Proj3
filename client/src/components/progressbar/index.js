import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import API from "../../utils/API";

class ProgressRadial extends Component {
  timerId = null;

  constructor(props) {
    super(props);
    this.state = {
      options: {
        labels: ["TS", "2Type", "DAT", "OtherTesting", "Products"],
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "18px"
            },
            total: {
              show: true,
              label: "Fast Blood",
              formatter: function(w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return;
              }
            }
          }
        }
      },
      TSProgress: 0,
      ConfTypeProgress: 0,
      DATProgress: 0,
      OtherTestingProgress: 0,
      ProductsProgress: 0
    };
  }

  UNSAFE_componentWillMount() {
    console.log(this.props);
//get data fron typenscreen to see it its tru or false, will display progress bar if present 
    if (this.props.testData.TS) {
      var intervalId = setInterval(() => {
        this.setState({
          TSProgress: this.state.TSProgress + 1
        });

        if (this.state.TSProgress >= 100) {
          clearInterval(intervalId);
        }
      }, 2.5 * 1000);
    }


//get data fron confirm type to see it its tru or false, will display progress bar if present 
if (this.props.testData.ConfTypeProgress){
 var intervalId2 = setInterval(() => {
   this.setState({
     ConfTypeProgress: this.state.ConfTypeProgress + 1
   });
   if (this.state.ConfTypeProgress >= 100) {
     clearInterval(intervalId2);
   }
 }, 8.3 * 1000);
 }
   

 
//get data fron DAT to see it its tru or false, will display progress bar if present 
    if (this.props.testData.DAT) {
      var intervalId3 = setInterval(() => {
        this.setState({
          DATProgress: this.state.DATProgress + 1
        });
        if (this.state.DATProgress >= 100) {
          clearInterval(intervalId3);
        }
      }, 1 * 1000);
    }

    //get data fron other test including( ELUTION, ABID, TITER, FUllxm) to see it its tru or false, will display progress bar if present 
if (this.props.testData.ABID ||this.props.testData.Elution|| this.props.testData.Titer){

  var intervalId4 = setInterval(() => {
      this.setState({
        OtherTestingProgress: this.state.OtherTestingProgress + 1
      });
      if (this.state.OtherTestingProgress >= 100) {
        clearInterval(intervalId4);
      }
    }, 1 * 1000);

}
  

    var intervalId5 = setInterval(() => {
      this.setState({
        OtherTestingProgress: this.state.OtherTestingProgress + 1
      });
      if (this.state.OtherTestingProgress >= 100) {
        clearInterval(intervalId5);
      }
    }, 1 * 1000);

    var intervalId6 = setInterval(() => {
      this.setState({
        ProductsProgress: this.state.ProductsProgress + 1
      });
      if (this.state.ProductsProgress >= 100) {
        clearInterval(intervalId6);
      }
    }, 1 * 1000);
  }

  render() {
    const {
      TSProgress,
      ConfTypeProgress,
      DATProgress,
      OtherTestingProgress,
      ProductsProgress
    } = this.state;
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={[
            TSProgress,
            ConfTypeProgress,
            DATProgress,
            OtherTestingProgress,
            ProductsProgress
          ]}
          type="radialBar"
          height="500"
        />
      </div>
    );
  }
}

function NewBar({ timer }) {
  console.log(timer);
  const options = {
    labels: ["TS", "2Type", "DAT", "OtherTesting", "Products"],
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px"
        },
        value: {
          fontSize: "18px"
        },
        total: {
          show: true,
          label: "Fast Blood",
          formatter: function(w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249;
          }
        }
      }
    }
  };
  return (
    <ReactApexChart
      options={options}
      series={timer}
      type="radialBar"
      height="100"
    />
  );
}

// export default NewBar;
export default ProgressRadial;
