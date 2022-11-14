import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';


function withRouter(Component) {
  function ComponentWithRouter(props) {
    const params = useParams();
    const navigate = useNavigate();

    return <Component {...props} params={params} navigate={navigate} />
  }
  return ComponentWithRouter
}

export default withRouter;