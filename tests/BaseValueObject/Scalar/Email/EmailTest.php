<?php

namespace BaseValueObject\Scalar\Email;

use PHPUnit\Framework\TestCase;

/**
 * Class EmailTest
 * @package BaseValueObject\Scalar\Email
 */
class EmailTest extends TestCase
{
    /**
     * @test
     * @expectedException \InvalidArgumentException
     */
    public function invalidEmailExpcetion()
    {
        new Email('invalidEmail.com');
    }

    /**
     * @test
     */
    public function validEmail()
    {
        $email = 'valid@email.com';
        $emailValueObject = new Email($email);
        $this->assertEquals($email, $emailValueObject->value());
    }
}
