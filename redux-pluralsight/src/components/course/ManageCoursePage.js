import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        }

        this.updateCourseState = this.updateCourseState.bind(this)
        this.saveCourse = this.saveCourse.bind(this)
    }

    updateCourseState(event) {
        const field = event.target.name
        let course = Object.assign({}, this.state.course)
        course[field] = event.target.value
        return this.setState({ course })
    }

    saveCourse(event) {
        event.preventDefault()
        this.props.actions.saveCourse(this.state.course)
        this.context.router.push('/courses')
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
            />
        )
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

ManageCoursePage.contextTypes = {
    router: PropTypes.object
}

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id)
    if(course.length !== 0) return course[0]
    return null
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id

    if(courseId) {
        course = getCourseById(state.courses, courseId)
    }
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })

    return {
        course,
        authors: authorsFormattedForDropdown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
