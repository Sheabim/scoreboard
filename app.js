const title = React.createElement(
  'h1',
  {id: 'main-title', 
   title: 'This is a title.'},
   'My First React element'
);

const desc = React.createElement(
'p',
 null,
 'Just lern how to cereate a React node and render'
); 


const header = React.createElement(
'header',
 null,
 title,
 desc
); 


ReactDOM.render(
 header,
 document.getElementById('root')
);