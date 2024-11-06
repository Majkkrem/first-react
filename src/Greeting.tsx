import React  from 'react';

interface GreetinProps{
    name: string;
    age: number;
}

function Greeting(props: GreetinProps) {
    return <h2>Hello, {props.name}, te már {props.age} éves vagy?</h2>
  }

  export default Greeting;