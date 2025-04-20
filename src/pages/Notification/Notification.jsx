import './Notification.css';
import { FaPlus, FaSync, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

const notifications = [
  {
    id: 1,
    title: 'Welcome to MacroMate!',
    message: 'We are excited to have you on board! MacroMate is here to streamline your workflow and help you deliver the best support experience. Enjoy exploring the macros and features we’ve built for you. Have fun, and let’s make support easier and faster!',
    type: 'new',
    time: 'Just now'
  },
  {
    id: 2,
    title: 'Phone Number Change Macro Update',
    message: 'If a  client requests a phone number change, but unfortunately, they don’t pass the security question to verify their identity. Kindly inform the client to call back with the correct details so we can proceed with the request.',
    type: 'warning',
    time: 'Today at 10:30 AM'
  },
  {
    id: 3,
    title: 'Payment via USSD & Paybill - All Systems Go!',
    message: 'Great news! Payment via USSD and Paybill are currently working smoothly. You can now assist clients with payment issues without any hitches. Keep up the great work!',
    type: 'success',
    time: 'Today at 9:00 AM'
  },
  {
    id: 4,
    title: 'Keep Up the Great Work!',
    message: 'You’re doing an amazing job. Every interaction you have with our clients makes a difference. Keep your spirits high and continue delivering excellence together, we can achieve great things!',
    type: 'alert',
    time: 'Yesterday'
  }
];

const getIcon = (type) => {
  switch (type) {
    case 'new': return <FaPlus className="icon new" />;
    case 'success': return <FaCheckCircle className="icon success" />;
    case 'warning': return <FaSync className="icon warning" />;
    case 'alert': return <FaExclamationCircle className="icon alert" />;
    default: return null;
  }
};

const Notification = () => {
  return (
    <div className="notification-wrapper">
      <h2>MacroMate Notifications</h2>
      <div className="notification-list">
        {notifications.map(({ id, title, message, time, type }) => (
          <div className={`notification-card ${type}`} key={id}>
            {getIcon(type)}
            <div className="notification-content">
              <strong>{title}</strong>
              <p>{message}</p>
              <span className="time">{time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
