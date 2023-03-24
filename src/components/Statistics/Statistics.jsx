import React, { Component } from 'react';
import { Container, Title, List, Item } from './Statistics.styled';
import Notification from '../Notification/Notification';

class Statistics extends Component {
  render() {
    const data = Object.entries(this.props);

    return (
      <Container>
        <Title>Statistics</Title>
        {this.props.total > 0 ? (
          <List>
            {data.map(([key, value]) => (
              <Item key={key}>
                {key}: {value}
              </Item>
            ))}
          </List>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}

export default Statistics;
