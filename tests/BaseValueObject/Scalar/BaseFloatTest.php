<?php

namespace BaseValueObject\Scalar;

use PHPUnit\Framework\TestCase;

class BaseFloatTest extends TestCase
{
    /**
     * @test
     * @expectedException \Throwable
     */
    public function invalidInt()
    {
        new FloatValueObject('invalid');
    }

    /**
     * @test
     */
    public function validFloat()
    {
        $floatValue = 10.10;
        $float = new FloatValueObject($floatValue);
        $this->assertEquals($floatValue, $float->value());
        $this->assertTrue(is_float($float->value()));
    }
}
