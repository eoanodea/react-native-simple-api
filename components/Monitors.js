import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import {getMonitors} from "./api";

export default class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null,
      pagination: null
    };
  }

  componentDidMount() {
    this.fetchMonitors();
  }

  fetchMonitors() {
    getMonitors().then(res => {
      if (res.error) {
        console.log("error!", res.error);
        this.setState({
          loading: false,
          error: res.error.message
        });
      } else {
        console.log("data!", res);
        this.setState({
          loading: false,
          data: res.monitors,
          pagination: res.pagination
        });
      }
    });
  }

  render() {
    const { loading, data, error, pagination } = this.state;

    if (loading) return <ActivityIndicator />;
    else if (error)
      return (
        <View>
          <Text>Error! {error}</Text>
        </View>
      );
    else
      return (
        <View>
          <Text>Total Monitors: {pagination.total}</Text>
          {data.map((dat, i) => {
            return (
              <View key={i} style={{margin: 20}}>
                <Text style={{fontSize: 40}}>
                 {i}: {dat.friendly_name}
                </Text>     
                {Object.entries(dat).map((subdat, j) => {
                  return (
                    <Text key={j} style={{fontSize: 20}}>
                      {subdat[0].replace("_", " ")}: {subdat[1]}
                    </Text>
                  );
                })}
              </View>
            );
          })}
        </View>
      );
  }
}