import React, { Component } from 'react';

export default class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    }
  }

  renderItemsByUserType = (userType) => {
    const data = this.state.userData;
    const filteredData = data.filter(item => item.user_type === userType);
    const mapRows = filteredData.map(item => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsByNameStartingWithJ = () => {
    const data = this.state.userData;
    const filteredData = data.filter(item => item.name.startsWith('J'));
    const mapRows = filteredData.map(item => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsByAge = () => {
    const data = this.state.userData;
    const filteredData = data.filter(item => item.age > 28 && item.age <= 50);
    const mapRows = filteredData.map(item => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  getTotalYearsOfDesigners = () => {
    const data = this.state.userData;
    const designersData = data.filter(item => item.user_type === 'Designer');
    const totalYears = designersData.map(item => item.years).reduce((total, years) => total + years, 0);
    return totalYears;
  };

  render() {
    return (
      <React.Fragment>
        <h1> Display All Items</h1>
      <div className="display-box">
        <ul>
          {this.state.userData.map(item => (
            <li key={item.id} className="list-elements">
              <span>Id: {item.id}</span>
              <span>Name: {item.name}</span>
              <span>User Type: {item.user_type}</span>
              
            </li>
          ))}
        </ul>
      </div>
        <h1>Filter items by user type</h1>
        <div className="display-box">
          <ul>{this.renderItemsByUserType('Designer')}</ul>
        </div>

        <h1>Filter items by name starting with "J"</h1>
        <div className="display-box">
          <ul>{this.renderItemsByNameStartingWithJ()}</ul>
        </div>

        <h1>Filter items by age</h1>
        <div className="display-box">
          <ul>{this.renderItemsByAge()}</ul>
        </div>

        <h1>Total years of experience of designers</h1>
        <div className="display-box">
          <ul>{this.getTotalYearsOfDesigners()}</ul>
        </div>
        </React.Fragment>
    )
  }
}