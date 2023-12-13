import React, { useState, useEffect, useRef } from "react";
import './ConfirmeModal.css'

const ConfirmeModal = ({ onClose, onConfirm }) => {
	const handleConfirm = () => {
		onConfirm(); // Invoke the callback function when confirming
		onClose();
	};

	const handleCancel = () => {
		onClose();
	};
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
						<button type="button" className="btn btn-primary" onClick={handleConfirm}>
							Confirm
						</button>
						<button type="button" className="btn btn-warning" onClick={handleCancel}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmeModal;
