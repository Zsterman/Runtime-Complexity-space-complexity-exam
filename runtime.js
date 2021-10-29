//   CI & RTEM TOOLS

// RESEARCH

// 	Team City - first released on October 2nd, 2006, Team City is a powerful continuous integration solution that can be used for free during the first hundred build configurations, and is used by thousands of professional companies worldwide. With Team City, you can run parallel builds at the same time, mark your builds and identify the hung ones. It’s easy to install and the interface is really user-friendly. You'll love its community, and professional support for users. Setup is Incredibly well documented, with plenty of tutorials on their home website. Getting started is as easy as downloading from their site, running a pre-configured server code, and beginning their extremely helpful instructions / tutorials.

// 	Unique Values - 

// Free up to 100 Build Configurations
// Able to import source code from two different VCS into a single build
// Capacity to substitute testers with agents
// Allows testing changes without committing to them to the VCS


	

// 	Sentry - Sentry is one of the biggest players in the real time error monitoring market. As a well-established error-monitoring solution since 2002, they've built a stable product with a variety of features and functionality; Easy to install, wonderful tutorials all over their website, and plenty of documents and resources. Developers use Sentry to see stack traces, user context, release data, and preceding events. With an impressive range of functionality but high price point, Sentry could be a more than suitable solution for helping developers and big companies reduce their error and crash count, while effectively minimizing unforeseen errors and unpredictability.  

// 	Unique Values - 

// Custom Queries
// Dashboards full of required info
// Cross-product integration
// Stack traces
// Breadcrumb style clues for finding errors





// PART TWO 

// Timing results from tinyArray -
// Insert - 30 μs
// Append - 87.167 μs

// Timing results from smallArray -
// Insert - 40.917 μs
// Append - 95.792 μs

// Timing results from mediumArray -
// Insert - 213.375 μs
// Append - 142.375 μs

// Timing results from largeArray -
// Insert - 10.21225 ms
// Append - 654.25 μs

// Timing results from extraLargeArray -
// Insert - 1.08493925 s
// Append - 8.386167 ms


// Summary - 

// The insert function does not scale as well as the append function. Insert seemed faster at first, but as the arrays got bigger, it slowed increasingly, while append stayed at a more consistent speed. With extraLargeArray as an example, the insert function exceeded one second, while Append still remained within milliseconds. 


// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function is_unique(str) {
    var obj = {};
    for (var z = 0; z < str.length; ++z) {
      var ch = str[z];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
  }
  
  console.log(is_unique("abcdefgh"));
  console.log(is_unique("aa"));