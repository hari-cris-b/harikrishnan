const handleScroll = (sectionId: string) => {
    console.log('Attempting to scroll to:', sectionId); // Debug log
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found, scrolling...'); // Debug log
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Element not found!'); // Debug log
    }
  };