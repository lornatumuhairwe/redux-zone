import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, theProps) => {
    console.log(theProps);
    return {
        active: theProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, theProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(theProps.filter))
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink
