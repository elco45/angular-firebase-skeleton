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
	        	//payload = data to add
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
	        	ref.child(payload).remove();
	        },
	        Update: function(payload) {
	        	//payload = data to update
	        	ref.child(payload.$id).update({
	        		firstName: payload.firstName,
	            	lastName: payload.lastName
	        	})
	        }
		};
	}
]);
