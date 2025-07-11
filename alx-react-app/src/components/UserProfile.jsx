const UserProfile = ({name, Age ,bio})=>{
    return(
        <div>
            <h2>{name}</h2>
            <p>Age:{Age}</p>
            <p>Bio:{bio}</p>
        </div>
    );
};
export default UserProfile;