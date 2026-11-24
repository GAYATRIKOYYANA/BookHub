import { FAILURE_IMG } from '../constants/images'

const FailureView = ({ onRetry }) => (
  <div className="failure-view">
    <img src={FAILURE_IMG} alt="failure view" className="state-img" />
    <p>Something went wrong. Please try again</p>
    <button type="button" className="primary-btn" onClick={onRetry}>Try Again</button>
  </div>
)

export default FailureView
