import React, { useState, useRef, useEffect } from 'react';
import { LogOut, Camera, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { signOut, getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import { uploadData, getUrl } from 'aws-amplify/storage';

interface UserData {
  name?: string;
  email: string;
  picture?: string;
}

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({ email: '' });
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Get current authenticated user
      const currentUser = await getCurrentUser();
      
      // Get user attributes (name, email, etc)
      const attributes = await fetchUserAttributes();
      
      // Set user data
      setUserData({
        name: attributes.name || currentUser.username,
        email: attributes.email || '',
        picture: attributes.picture
      });
      
      // If user has a profile picture, fetch the URL
      if (attributes.picture) {
        try {
          const result = await getUrl({
            key: attributes.picture,
            options: {
              accessLevel: 'private'
            }
          });
          setProfileImageUrl(result.url.toString());
        } catch (err) {
          console.error('Error getting profile image URL:', err);
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Redirect to auth if not authenticated
      navigate('/auth');
    } finally {
      setLoading(false);
    }
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      setLoading(true);
      
      // Generate a unique filename
      const filename = `profile-${Date.now()}-${file.name}`;
      
      // Upload file to S3
      await uploadData({
        key: filename,
        data: file,
        options: {
          accessLevel: 'private',
          contentType: file.type
        }
      });
      
      // Get the URL of the uploaded image
      const result = await getUrl({
        key: filename,
        options: {
          accessLevel: 'private'
        }
      });
      
      // Update profile image URL
      setProfileImageUrl(result.url.toString());
      setImageError(false);
      
      // Note: In a real app, you would also update the user attributes
      // to store the image key or URL in the user's profile
      console.log('Successfully uploaded image:', filename);
      
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p>Loading profile...</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 h-24 w-full"></div>
        
        <div className="px-8 py-8 relative">
          {/* Profile Image with Upload */}
          <div className="relative -mt-16 mb-6 flex justify-center">
            <div className="h-32 w-32 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg relative group">
              {!imageError && profileImageUrl ? (
                <img 
                  src={profileImageUrl} 
                  alt={userData.name || 'User'} 
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-200">
                  <User size={48} className="text-gray-400" />
                </div>
              )}
              
              {/* Upload overlay button */}
              <button 
                onClick={triggerFileInput}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Upload profile picture"
              >
                <Camera size={24} className="text-white" />
              </button>
            </div>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              aria-label="Upload profile image"
            />
          </div>
          
          {/* User Info */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {userData.name || 'User'}
            </h2>
            <p className="text-gray-500 mt-1">{userData.email}</p>
          </div>
          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;