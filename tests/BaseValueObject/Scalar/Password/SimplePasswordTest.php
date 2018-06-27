<?php

namespace BaseValueObject\Scalar\Password;

use PHPUnit\Framework\TestCase;

/**
 * Class SimplePasswordTest
 * @package BaseValueObject\Scalar\Password
 */
class SimplePasswordTest extends TestCase
{
    private $validCleanPassword = '123456';

    /**
     * @test
     * @expectedException \InvalidArgumentException
     */
    public function exceptionMinLength()
    {
        SimplePassword::byCleanPassword('12345');
    }

    /**
     * @test
     */
    public function validByCleanPassword()
    {
        $password = SimplePassword::byCleanPassword($this->validCleanPassword);
        $this->assertInstanceOf(Password::class, $password);
    }

    /**
     * @test
     */
    public function notVerifiedPassword()
    {
        $password = SimplePassword::byCleanPassword($this->validCleanPassword);
        $this->assertFalse($password->verify('1234567'));
    }

    /**
     * @test
     */
    public function verifiedPassword()
    {
        $password = SimplePassword::byCleanPassword($this->validCleanPassword);
        $this->assertTrue($password->verify($this->validCleanPassword));
    }

    /**
     * @test
     * @expectedException \InvalidArgumentException
     * @expectedExceptionMessage It is not a hashed password.
     */
    public function exceptionInvalidHashedPassword()
    {
        $password = new SimplePassword('123456');
    }

    /**
     * @test
     * @expectedException \BadMethodCallException
     * @expectedExceptionMessage Equals is not supported.
     */
    public function exceptionEquals()
    {
        $password = SimplePassword::byCleanPassword($this->validCleanPassword);
        $otherPassword = SimplePassword::byCleanPassword(
            $this->validCleanPassword
        );
        $password->equals($otherPassword);
    }

    /**
     * @test
     * @expectedException \InvalidArgumentException
     */
    public function changePasswordException()
    {
        $password = SimplePassword::byCleanPassword($this->validCleanPassword);
        $password->changePassword($this->validCleanPassword);
    }

    /**
     * @test
     */
    public function validChangePassword()
    {
        $newCleanPassword = '123456789';
        $password = SimplePassword::byCleanPassword($this->validCleanPassword);
        $newPassword = $password->changePassword($newCleanPassword);
        $this->assertInstanceOf(SimplePassword::class, $newPassword);
        $this->assertTrue($newPassword->verify($newCleanPassword));
    }
}
