import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {animals} = this.props;
    return (
    <div>
      {animals.map( (data,i) => {return(
      <div key={i}>
        <h5>{data.name}</h5>
        <img src={data.image} alt={data.name} width='300px' />
        <span>{data.specie}</span>
      </div>
      )
      })}
    </div>
    )
  }
}
