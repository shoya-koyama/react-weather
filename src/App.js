import { useEffect, useState } from 'react'; 
import './App.css'; 

function App() { 
  const [user, setUser] = useState(null); 
  const [isLoaded, setIsLoaded] = useState(false); 
  const [error, setError] = useState(null); 
  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/users/1") 
    .then(res => res.json()) 
    .then(data => { 
      console.log('取得データ', data); 
      setUser(data); 
      setIsLoaded(true); 
    }) 
    .catch(err => { 
      console.log('エラー発生', err); 
      setIsLoaded(true); 
      setError(err); 
    }); 
  }, []) 
  if (error) { return (<div>Error: {error.message}</div>); } 
  else if(!isLoaded) { return (<div>Now Loading...</div>); } 
  else { return (<div style={{padding:10}}> <p>{ user && user.name }</p></div>); } 
} 

export default App;