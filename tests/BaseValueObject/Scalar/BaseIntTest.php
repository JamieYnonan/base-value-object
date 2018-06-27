<?php

namespace BaseValueObject\Scalar;

use PHPUnit\Framework\TestCase;

class BaseIntTest extends TestCase
{
    /**
     * @test
     * @expectedException \Throwable
     */
    public function invalidInt()
    {
        new IntValueObject('invalid');
    }

    /**
     * @test
     */
    public function validInt()
    {
        $intValue = 10;
        $int = new IntValueObject($intValue);
        $this->assertEquals($intValue, $int->value());
        $this->assertTrue(is_int($int->value()));
    }
}
