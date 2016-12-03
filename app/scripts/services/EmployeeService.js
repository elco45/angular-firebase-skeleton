angular.module('MyApp.Services').factory('EmployeeService', ['$firebaseArray', '$firebaseObject',
	function($firebaseArray, $firebaseObject){
		//firebase.database().ref() --> root
		var ref = firebase.database().ref().child('employees');
		return {
			All: function() {
	            var data = $firebaseArray(ref);
	            return data;
	        },
	        Get: function(payload) {
	        	//payload = id
	            var data = $firebaseObject(ref.child(payload));
	            return data;
	        },
	        Add: function(payload) {
	        	//payload = data to add
	            ref.push({
	            	firstName: payload.firstName,
	            	lastName: payload.lastName
	            });
	        },
	        Delete: function(payload) {
	        	//payload = id
	        	ref.remove(payload)
	        },
	        Update: function(payload1, payload2) {
	        	//payload1 = id
	        	//payload2 = data to update
	        	var data = $firebaseObject(ref.child(payload1.key));
	        	data.update({
	        		firstName: payload2.firstName,
	            	lastName: payload2.lastName
	        	})
	        }
		};
	}
]);
