import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const articles = await fetchData();
        setData(articles);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.attributes.Title}</h2>

              <div>
                {item.attributes.Content.map((contentItem, index) => (
                  <div key={index}>
                    {contentItem.type === 'heading' && (
                      <p>{contentItem.children.map(child => child.text).join(' ')}</p>
                    )}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;