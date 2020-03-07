import React from 'react'
import { View, Text } from 'react-native'
import { ENV_MDOE } from 'react-native-dotenv'

export default class FetchData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        console.log('yeehaw', ENV_MDOE)
        fetch('http://dev-the-locker-room.herokuapp.com/api/users')
        .then(response => response.json)
        .then(res => {
            this.setState({
                loading: false,
                data: res
            })
        })
    }

    render() {
        return (
            <View>
                <Text>Yeehaw</Text>

            </View>
        )
    }
}