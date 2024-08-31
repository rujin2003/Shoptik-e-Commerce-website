import { useNavigate } from 'react-router-dom';
import { BsPersonPlus } from 'react-icons/bs';

const ProfileButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-8">
      <button
        title="Go to Sign In"
        className="flex hover:text-primary"
        onClick={() => navigate('/signin')} 
      >
        <BsPersonPlus className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ProfileButton;