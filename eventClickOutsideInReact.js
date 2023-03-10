useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isOpen && !event.target.closest('.popover-menu')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
