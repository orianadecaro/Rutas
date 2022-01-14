import React from 'react';
import {Text} from "react-native";
import styles from './style';



 function Topic({ match }) {
    return (
      <Text style={styles.topic}>{match.params.topicId}</Text>
    )
  }
  export default Topic;