// import React, { useState, useEffect, useRef } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import './App.css';
// import { io } from 'socket.io-client';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const EditorPage = () => {
//   const { id: documentId } = useParams();
//   const [value, setValue] = useState('');
//   const [username, setUsername] = useState('');
//   const [users, setUsers] = useState([]);
//   const [messages, setMessages] = useState([]); // Store chat messages
//   const [message, setMessage] = useState(''); // Store current chat message
//   const socketRef = useRef();
//   const navigate = useNavigate();
//   const hasFetchedUsername = useRef(false);
//   const [showDropdown, setShowDropdown] = useState(false); 
//   let documents=[]
//   useEffect(() => {
//     const fetchUsername = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('No token found');

//         const response = await axios.get('http://localhost:5000/user/me', {
//           headers: {
//             'x-auth-token': token
//           }
//         });
//         documents=response.data.documentLinks;
//         console.log(documents)
//         setUsername(response.data.username);
//       } catch (error) {
//         console.error('Error fetching username:', error);
//         toast.error("Please login first");
//         localStorage.setItem('redirectAfterLogin', window.location.pathname);
//         navigate("/login");
//       }
//     };

//     if (!hasFetchedUsername.current) {
//       fetchUsername();
//       hasFetchedUsername.current = true;
//     }
//   }, [navigate]);

//   useEffect(() => {
//     if (username) {
//       const socket = io('http://localhost:5000');
//       socketRef.current = socket;

//       socket.emit('get-document', { documentId, username });

//       socket.on('load-document', (document) => {
//         setValue(document);
//       });

//       socket.on('receive-changes', (delta) => {
//         setValue(delta);
//       });

//       socket.on('receive-message', ({ message, username }) => {
//         setMessages(prevMessages => [...prevMessages, { message, username }]);
//       });

//       socket.on('user-list', (users) => {
//         setUsers(users);
//       });

//       return () => {
//         socket.disconnect();
//       };
//     }
//   }, [documentId, username]);

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       socketRef.current.emit('send-message', { message, username });
//       // setMessages([...messages, { message, username }]);
//       setMessage('');
//     }
//   };

//   const handleAutosave = () => {
//     fetch(`http://localhost:5000/document/${documentId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ content: value, users }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       toast.success(data.message || 'Document saved successfully!');
//     })
//     .catch(error => toast.error(`Error saving document:${error}`));
//   };

//   const handleChange = (content, delta, source, editor) => {
//     setValue(content);
//     if (source === 'user') {
//       socketRef.current.emit('send-changes', content);
//     }
//   };

//   const modules = {
//     toolbar: [
//       [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//       ['bold', 'italic', 'underline', 'strike'],
//       [{ 'color': [] }, { 'background': [] }],
//       [{ 'align': [] }],
//       ['clean']
//     ]
//   };

//   const handleShare = () => {
//     const url = `${window.location.origin}/document/${documentId}`;
//     navigator.clipboard.writeText(url);
//     alert(`Share this URL: ${url}`);
//   };
  

//   const handleLogout = async() => {
//     localStorage.removeItem('token');
//     toast("logout successfully");
//     navigate("/login");
//   };
//   const toggleDropdown = () => {
//     console.log("clicked")
//     setShowDropdown( !showDropdown);
//   };
//   return (
//     <div className="editor-page">
//       <div className="navbar">
//         <div className="navbar-left">
//           <h1>Write your code and higlight using the tools</h1>
//         </div>
//         <div className="navbar-right">
//           <button className="share-button" onClick={handleShare}>Share</button>
//           <button className="save" onClick={handleAutosave}>Save</button>
//           <div className="dropdown">
//             <button className="share-button" onClick={toggleDropdown}>All documents</button>
//             {showDropdown && (
//               <div className="dropdown-content">
//                 {documents.map((link, index) => (
//                   <Link to={link} key={index} className="dropdown-link">{link}</Link>
//                 ))}
//               </div>
//             )}
//           </div>
//           <button className="logout" onClick={handleLogout}>Log Out</button>
//         </div>
//       </div>
//       <div className="toolbar-container">
//         <ReactQuill value={value} onChange={handleChange} modules={modules} />
//       </div>
//       <div className="user-list">
//         <h3>Users in this document:</h3>
//         <ul>
//           {users.map(user => (
//             <li key={user}>{user}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="chat-box">
//         <div className="messages">
//           {messages.map((msg, index) => (
//             <div key={index}>
//               <strong>{msg.username}: </strong>{msg.message}
//             </div>
//           ))}
//         </div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default EditorPage;
import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditorPage = () => {
  const { id: documentId } = useParams();
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]); // Store chat messages
  const [message, setMessage] = useState(''); // Store current chat message
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const [documents, setDocuments] = useState([]); // Store document links
  const socketRef = useRef();
  const navigate = useNavigate();
  const hasFetchedUsername = useRef(false);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const response = await axios.get('http://localhost:5000/user/me', {
          headers: {
            'x-auth-token': token
          }
        });
        setDocuments(response.data.documentLinks);
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
        toast.error("Please login first");
        localStorage.setItem('redirectAfterLogin', window.location.pathname);
        navigate("/login");
      }
    };

    if (!hasFetchedUsername.current) {
      fetchUsername();
      hasFetchedUsername.current = true;
    }
  }, [navigate]);

  useEffect(() => {
    if (username) {
      const socket = io('http://localhost:5000');
      socketRef.current = socket;

      socket.emit('get-document', { documentId, username });

      socket.on('load-document', (document) => {
        setValue(document);
      });

      socket.on('receive-changes', (delta) => {
        setValue(delta);
      });

      socket.on('receive-message', ({ message, username }) => {
        setMessages(prevMessages => [...prevMessages, { message, username }]);
      });

      socket.on('user-list', (users) => {
        setUsers(users);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [documentId, username]);

  const handleSendMessage = () => {
    if (message.trim()) {
      socketRef.current.emit('send-message', { message, username });
      setMessage('');
    }
  };

  const handleAutosave = () => {
    fetch(`http://localhost:5000/document/${documentId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: value, users }),
    })
    .then(response => response.json())
    .then(data => {
      toast.success(data.message || 'Document saved successfully!');
    })
    .catch(error => toast.error(`Error saving document: ${error}`));
  };

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
    if (source === 'user') {
      socketRef.current.emit('send-changes', content);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean']
    ]
  };

  const handleShare = () => {
    const url = `${window.location.origin}/document/${documentId}`;
    navigator.clipboard.writeText(url);
    alert(`Share this URL: ${url}`);
  };

  const handleLogout = async () => {
    localStorage.removeItem('token');
    toast("logout successfully");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown(prevState => !prevState);
  };

  return (
    <div className="editor-page">
      <div className="navbar">
        <div className="navbar-left">
          <h1>Write your code and higlight using the tools</h1>
        </div>
        <div className="navbar-right">
          <button className="share-button" onClick={handleShare}>Share</button>
          <button className="save" onClick={handleAutosave}>Save</button>
          <div className="dropdown">
            <button className="share-button" onClick={toggleDropdown}>All documents</button>
            {showDropdown && (
              <div className="dropdown-content">
                {documents.map((link, index) => (
                  <Link to={link} key={index} className="dropdown-link">{link}</Link>
                ))}
              </div>
            )}
          </div>
          <button className="logout" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <div className="toolbar-container">
        <ReactQuill value={value} onChange={handleChange} modules={modules} />
      </div>
      <div className="user-list">
        <h3>Users in this document:</h3>
        <ul>
          {users.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index}>
              <strong>{msg.username}: </strong>{msg.message}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default EditorPage;
