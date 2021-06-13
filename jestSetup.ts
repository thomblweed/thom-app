import { cleanup } from '@testing-library/react';

// horrible div created by Chakra UI removal
beforeEach(() => {
  const toast = document.getElementById('chakra-toast-portal');
  toast && toast.remove();
});

afterEach(cleanup);
