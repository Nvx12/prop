import PropTypes from 'prop-types';


const Profile = ({ user, handleName, children }) => {
  var { name, bio, profession } = user;
  return (
    <>
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">{children}</button>
            <span className="name mt-3">{name}</span>
            <span className="idd">{profession}</span>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              <span className="number">
                1069 <span className="follow">Followers</span>
              </span>
            </div>
            <div className=" d-flex mt-2">
              <button
                className="btn1 btn-dark"
                onClick={() => handleName(name)}
              >
                Edit Profile
              </button>
            </div>
            <div className="text mt-3">
              <span>{bio}</span>
            </div>
            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              <span>
                <i className="fa fa-twitter"></i>
              </span>
              <span>
                <i className="fa fa-facebook-f"></i>
              </span>
              <span>
                <i className="fa fa-instagram"></i>
              </span>
              <span>
                <i className="fa fa-linkedin"></i>
              </span>
            </div>
            <div className=" px-2 rounded mt-4 date ">
              <span className="join">Joined December,2022</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.defaultProps = {
  name: "Leila Ben Khalifa",
  profession: "Web Developer",
};

Profile.PropTypes={
  name  :PropTypes.string,
  profession: PropTypes.string
}



export default Profile;
