import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import {getAccount} from './api'
import Monitors from './Monitors'

export default class FetchData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: null
        }
    }

    componentDidMount() {
        this.fetchAccount()
    }

    fetchAccount() {
        console.log('starting!')
        getAccount()
        .then(res => {
            if(res.error) {
                console.log('error!', res.error)
                this.setState({
                    loading: false,
                    error: res.error.message
                })
            } else {
                console.log('data!', res)
                this.setState({
                    loading: false,
                    data: res.account
                })
            }
        })
    }

    render() {
        const {loading, data, error} = this.state

        if(loading) return <ActivityIndicator />
        else if (error) return <View><Text>Error! {error}</Text></View>
        else return (
            <View>
                <Text>Account:</Text>
                {Object.entries(data).map((dat, i) => {
                    return <Text key={i}>{dat[0].replace('_', ' ')}: {dat[1]}</Text>
                }) }
                <ScrollView>
                    <Monitors />
                </ScrollView>
            </View>
        )
    }
}