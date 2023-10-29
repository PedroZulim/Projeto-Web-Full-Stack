import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import './ConfirmeModal.css'

const ConfirmeModal = ({ onClose}) => {
	return (
		<div className="modal" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Removal Confirmation</h5>
						<button type="button" className="btn-close" onClick={() => onClose()}
								aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<p>Are you sure you want to remove?</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={() => onClose()}>Confirm
						</button>
						<button type="button" className="btn btn-warning" onClick={() => onClose()}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmeModal;
