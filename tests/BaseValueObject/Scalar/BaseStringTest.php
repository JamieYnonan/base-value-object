<?php

namespace BaseValueObject\Scalar;

use PHPUnit\Framework\TestCase;

class BaseStringTest extends TestCase
{
    /**
     * @test
     */
    public function validToString()
    {
        $string = new StringValueObject('text');
        $this->assertEquals($string->value(), $string->__toString());
    }
}
