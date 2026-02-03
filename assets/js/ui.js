// Lightweight UI helpers that prefer SweetAlert2, fall back to swal or native alerts/confirms
(function(window){
  async function showSuccess(text = 'Success'){
    if (window.Swal && typeof Swal.fire === 'function') return Swal.fire({ icon: 'success', title: 'Done', text, confirmButtonText: 'OK' });
    if (window.swal) return swal('Done', text, 'success');
    alert(text);
  }
  async function showWarning(text = 'Warning'){
    if (window.Swal && typeof Swal.fire === 'function') return Swal.fire({ icon: 'warning', title: 'Warning', text });
    if (window.swal) return swal('Warning', text, 'warning');
    alert(text);
  }
  async function showError(text = 'Error'){
    if (window.Swal && typeof Swal.fire === 'function') return Swal.fire({ icon: 'error', title: 'Error', text });
    if (window.swal) return swal('Error', text, 'error');
    alert(text);
  }
  // confirm, returns Promise<boolean>
  function showConfirm(text = 'Are you sure?'){
    // Theme color used across the site
    const themeBlue = '#1E90FF';
    if (window.Swal && typeof Swal.fire === 'function'){
      return Swal.fire({
        title: text,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonColor: themeBlue,
        reverseButtons: false
      }).then(r => !!r.isConfirmed);
    }
    if (window.swal && typeof swal === 'function'){
      return new Promise(resolve => { resolve(window.confirm(text)); });
    }
    return Promise.resolve(window.confirm(text));
  }

  window.UI = {
    showSuccess,
    showWarning,
    showError,
    showConfirm
  };
})(window);
