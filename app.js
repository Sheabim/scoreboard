


const desc = <p> I just learned how to create a React nodr and render it into </p>;
const myTitlteId = 'main-title';
const name = 'Guil';

	


const header = (
<header> 
	<h1 id={title}> {name}'s Firs React elemt ' </h1>
	<p> {desc} </p>
</header>

);

ReactDOM.render(
 header,
 document.getElementById('root')
);



