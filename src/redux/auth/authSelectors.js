const isAuthenticated = state => state.auth.token;
const getUser = state => state.auth.user;

export default { isAuthenticated, getUser };
