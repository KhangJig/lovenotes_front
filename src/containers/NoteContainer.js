import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Left } from 'native-base'

import { Colors } from '../styles/App'
import NoteView from '../views/NoteView'


class NoteContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      
      title: params ? params.otherParam : 'Notes',

      headerLeft: <Left />,
      headerRight: <TouchableOpacity
        onPress={() => navigation.navigate('Users')}
        style={{
          backgroundColor: 'transparent',
          alignSelf: 'center',
          marginRight: 18,
          shadowColor: 0,
          elevation: 0,
        }}>
        <Icon name="md-person" style={{ color: Colors.mainColor }} />
      </TouchableOpacity>
    }
  }

  render() {
    return (
      <NoteView
        {...this.props}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = state => {
  return ({

  })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
