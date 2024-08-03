
alert('test')

function Person(props){
  return(
    <div class='person'> 
      <h1>{props.name}</h1>
      <p>Your age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person  name='Tigran' age='18'/>
    <Person  name='Samvel' age='17'/>
  </div>
);

ReactDOM.render(app, document.querySelector('#app'))


