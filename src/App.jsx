import React, { useState } from 'react';
import notificationsData from './notifications';

// Notification component to display individual notification
const Notification = ({ notification, onRemove }) => (
  <div className="notification card mb-3">
    <div className="card-body">
      <h4 className="card-title">{notification.name}</h4>
      <p className="card-text">{notification.message}</p>
      <button className="btn btn-danger" onClick={() => onRemove(notification.id)}>Clear</button>
    </div>
  </div>
);

// App component to manage and display notifications
const App = () => {
  const [notificationList, setNotificationList] = useState(notificationsData);

  const removeNotification = (id) => {
    setNotificationList((prevList) => 
      prevList.filter(notification => notification.id !== id)
    );
  };

  const removeAllNotifications = () => {
    setNotificationList([]);
  };

  return (
    <div className="app container mt-5">
      <header className="mb-4 d-flex justify-content-between align-items-center">
        <h1>Notifications ({notificationList.length})</h1>
        <button className="btn btn-danger" onClick={removeAllNotifications}>Clear All</button>
      </header>
      <main className="notifications-list">
        {notificationList.map(notification => (
          <Notification 
            key={notification.id} 
            notification={notification} 
            onRemove={removeNotification} 
          />
        ))}
      </main>
    </div>
  );
};

export default App;