import React, { useEffect, useState } from 'react'; // Import React and required hooks

function Six() {
  const [data, setData] = useState(null); // Initialize state to store fetched data

  useEffect(() => {
    // useEffect runs once after the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts/1') // Fetch a sample post
      .then((response) => response.json()) // Convert response to JSON
      .then((json) => setData(json)); // Save the JSON data to state
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      {data ? ( // If data exists, show it
        <div>
          <h1>Title: {data.title}</h1> {/* Display the post title */}
          <p>Body: {data.body}</p> {/* Display the post body */}
        </div>
      ) : (
        <p>LOADING....</p> // Show loading text while data is being fetched
      )}
    </div>
  );
}

export default Six; // Export the component so it can be used elsewhere
