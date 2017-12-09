
import { TableFactory } from "./../src/TableFactory"
import { TableFactoryImpl } from "./../src/TableFactoryImpl"
import { User } from "./../src/User"
import { Group } from "./../src/Group"
import mocha = require('mocha');
import assert = require('assert');


describe('FactoryTest', function() {
  
    let newfactory:TableFactory;
    
    describe('#createFactoryTest', function() {
        it('default factory should be an instance of TableFactory', function() {
            newfactory = new TableFactoryImpl();
            assert.deepEqual(new TableFactoryImpl(), newfactory);
        });
    });
    
    describe('#createUserFactoryTest', function() {
        it('user factory should be an instance of TableFactory', function() {
            let userfactory = newfactory.createTable("UserTable");
            assert.deepEqual(new TableFactoryImpl(), userfactory);
        });
    });
    
    describe('#createGroupFactoryTest', function() {
        it('group factory should be an instance of TableFactory', function() {
            let groupfactory = newfactory.createTable("GroupTable");
            assert.deepEqual(new TableFactoryImpl(), groupfactory);
        });
    });
    
});


describe('UserTest', function() {
    
    let user:User;
    
    before(function() {
        user = new User("Weglchri15", "Christopher", 23, "Graz");
    });
    
    describe('#userIdTest', function () {
        it('user id matching', function () {
            assert.equal("Weglchri15", user._id);
        });
    });
    
    describe('#userNameTest', function () {
        it('user name matching', function () {       
            assert.equal("Christopher", user.name);            
        });
    });
    
    describe('#userAgeTest', function () {
        it('user age matching', function () {       
            assert.equal(23, user.age);            
        });
    });
    
    describe('#userAddressTest', function () {
        it('user address matching', function () {       
            assert.equal("Graz", user.address);            
        });
    });
    
});

describe('GroupTest', function() {
   
    let group:Group;
    let user:User;
    
    beforeEach(function() {
       group = new Group("FH-Group");
       user = new User("Weglchri15", "Christopher", 23, "Graz");
    });
            
    describe('#groupIdTest', function () {
        it('group id matching', function () {
            assert.equal("FH-Group", group._id);
        });
    });
    
    describe('#groupUserAddTest', function () {
        it('group user add', function () {
            group.adduser(user);
            assert.equal(1, group.getusers().length);
            assert.equal("Weglchri15", (group.getusers()[0])._id);
        });
    });
    
    describe('#groupUserDeleteTest', function () {
        it('group user delete', function () {
            group.adduser(user);
            assert.equal(1, group.getusers().length);
            group.deleteuser(user);
            assert.equal(0, group.getusers().length);    
        });
    });
    
    describe('#groupSizeTest', function () {
        it('group size matching', function () {
            group.adduser(user);
            assert.equal(1, group.size);
        });
    });
      
});








