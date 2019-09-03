import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

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
      TwoTypeProgress: 0,
      DATProgress: 0,
      OtherTestingProgress: 0,
      ProductsProgress: 0
    };
  }

  UNSAFE_componentWillMount() {
    var intervalId = setInterval(() => {
      this.setState({
        TSProgress: this.state.TSProgress + 1
      });

      if (this.state.TSProgress >= 100) {
        clearInterval(intervalId);
      }
    }, 2.5 * 1000);

    var intervalId2 = setInterval(() => {
      this.setState({
        TwoTypeProgress: this.state.TwoTypeProgress + 1
      });
      if (this.state.TwoTypeProgress >= 100) {
        clearInterval(intervalId2);
      }
    }, 8.3 * 1000);

    var intervalId3 = setInterval(() => {
      this.setState({
        DATProgress: this.state.DATProgress + 1
      });
      if (this.state.DATProgress >= 100) {
        clearInterval(intervalId3);
      }
    }, 1 * 1000);

    var intervalId4 = setInterval(() => {
      this.setState({
        OtherTestingProgress: this.state.OtherTestingProgress + 1
      });
      if (this.state.OtherTestingProgress >= 100) {
        clearInterval(intervalId4);
      }
    }, 1 * 1000);

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
      TwoTypeProgress,
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
            TwoTypeProgress,
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
