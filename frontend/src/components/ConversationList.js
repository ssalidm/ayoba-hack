import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ConversationsList = () => {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get('/api/conversations');
        setConversations(response.data);
      } catch (error) {
        console.error('Error fetching conversations', error);
      }
    };
    fetchConversations();
  }, []);
  return (
    <div className="mt-4">
      <ul className="list-group">
        {conversations.map((conversation, index) => (
          <li key={index} className="list-group-item">
            {conversation.customerName}: {conversation.lastMessage}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ConversationsList;