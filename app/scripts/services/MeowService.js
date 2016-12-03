angular.module('MyApp.Services').factory('MeowService', ['$firebaseArray', '$firebaseObject',
	function($firebaseArray, $firebaseObject){
		var ref = firebase.database().ref().child('em');
		return {
			all: function() {
	            var data = $firebaseArray(ref);
	            return data;
	        },
	        get: function(payload) {
	        	// id
	            var data = $firebaseObject(ref.child(payload));
	            return data;
	        },
	        add: function(payload) {
	        	// information to save
	            ref.push({
	            	firstName: payload.firstName,
	            	lastName: payload.lastName
	            });
	        },
	        delete: function(payload) {
	        	// id
	        	ref.remove(payload)
	        },
	        update: function(payload) {
	        	// information to update
	        	var data = $firebaseObject(ref.child(payload.key));
	        	data.update({
	        		firstName: payload.firstName,
	            	lastName: payload.lastName
	        	})
	        }
		};
	}
]);
