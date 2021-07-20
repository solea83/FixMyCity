import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Main, UserDetails, LastReported, SaveBox} from './ProfileStyled';
import ProfileDetails from './components/ProfileDetails';
import ProfileMainInfo from './components/ProfileMainInfo';
import Navigation from '../../components/Navigation/Navigation';
import { fetchLatestProfileInfoAndUpdateRedux } from "../../middleware/fetchUpdateRedux";

const Profile = () => {
    
    const dispatch = useDispatch();
    const myProfileInfo = useSelector(
        state => state.profileInfoReducer.info
      );

    useEffect(() => {          
        fetchLatestProfileInfoAndUpdateRedux(dispatch);              
    }, []);    

    
    const [showEditMode, toggleShowEditMode] = useState(true);  
    
    return (
        <>
            <Navigation showBackButton={true} page={"profile"}/>
                <Main>
                    <ProfileMainInfo myProfileInfo = {myProfileInfo} showEditMode={showEditMode}/>
                    {showEditMode===true?<ProfileDetails myProfileInfo = {myProfileInfo} />:null}
                    {showEditMode===false?<div><p>I'll store your issues.</p></div>:null}          
                    <SaveBox></SaveBox>
                </Main>
        </>       
   );
};
export default Profile;
