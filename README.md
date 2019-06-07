There appears to be an error (Invalid hook call) if I use react-redux version 7.0.3 in conjunction with using the connect object.

If I use version 6.0.1 I don't receive the same error and works as expected.

Expected behavior: No errors. 

Steps to reproduce:

This is a test project that I created just for this example.  If you clone, npm install and run you will see the specific error.  

If you remove react-redux and add version 6.0.1 the code works as expected.

I put the connect object in the src/features/Test/index.js

