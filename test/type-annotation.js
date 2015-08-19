/*
  Copyright (C) 2011-2013 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2015 Ingvar Stepanyan <me@rreverser.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2011 Arpad Borsos <arpad.borsos@googlemail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

'use strict';

var escodegen = require('./loader'),
    chai = require('chai'),
    expect = chai.expect,
    data;

data = {
      'Type Annotations': {
        'function foo(numVal: any){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'AnyTypeAnnotation',
                        range: [21, 24],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    range: [19, 24],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 24 }
                    }
                },
                range: [13, 24],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 24 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [25, 27],
                loc: {
                    start: { line: 1, column: 25 },
                    end: { line: 1, column: 27 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 27],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 27 }
            }
        },
        'function foo(numVal: number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'NumberTypeAnnotation',
                        range: [21, 27],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    range: [19, 27],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 27],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 27 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [28, 30],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 30 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },
        'function foo(numVal: number, strVal: string){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'NumberTypeAnnotation',
                        range: [21, 27],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    range: [19, 27],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 27],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 27 }
                }
            }, {
                type: 'Identifier',
                name: 'strVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'StringTypeAnnotation',
                        range: [37, 43],
                        loc: {
                            start: { line: 1, column: 37 },
                            end: { line: 1, column: 43 }
                        }
                    },
                    range: [35, 43],
                    loc: {
                        start: { line: 1, column: 35 },
                        end: { line: 1, column: 43 }
                    }
                },
                range: [29, 43],
                loc: {
                    start: { line: 1, column: 29 },
                    end: { line: 1, column: 43 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [44, 46],
                loc: {
                    start: { line: 1, column: 44 },
                    end: { line: 1, column: 46 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 46],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 46 }
            }
        },
        'function foo(numVal: number, untypedVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'NumberTypeAnnotation',
                        range: [21, 27],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    range: [19, 27],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 27],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 27 }
                }
            }, {
                type: 'Identifier',
                name: 'untypedVal',
                range: [29, 39],
                loc: {
                    start: { line: 1, column: 29 },
                    end: { line: 1, column: 39 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [40, 42],
                loc: {
                    start: { line: 1, column: 40 },
                    end: { line: 1, column: 42 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 42],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 42 }
            }
        },
        'function foo(untypedVal, numVal: number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'untypedVal',
                range: [13, 23],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 23 }
                }
            }, {
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'NumberTypeAnnotation',
                        range: [33, 39],
                        loc: {
                            start: { line: 1, column: 33 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [31, 39],
                    loc: {
                        start: { line: 1, column: 31 },
                        end: { line: 1, column: 39 }
                    }
                },
                range: [25, 39],
                loc: {
                    start: { line: 1, column: 25 },
                    end: { line: 1, column: 39 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [40, 42],
                loc: {
                    start: { line: 1, column: 40 },
                    end: { line: 1, column: 42 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 42],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 42 }
            }
        },
        'function foo(nullableNum: ?number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'nullableNum',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'NullableTypeAnnotation',
                        typeAnnotation: {
                            type: 'NumberTypeAnnotation',
                            range: [27, 33],
                            loc: {
                                start: { line: 1, column: 27 },
                                end: { line: 1, column: 33 }
                            }
                        },
                        range: [26, 33],
                        loc: {
                            start: { line: 1, column: 26 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    range: [24, 33],
                    loc: {
                        start: { line: 1, column: 24 },
                        end: { line: 1, column: 33 }
                    }
                },
                range: [13, 33],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 33 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },
        'function foo(callback: () => void){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'FunctionTypeAnnotation',
                        params: [],
                        returnType: {
                            type: 'VoidTypeAnnotation',
                            range: [29, 33],
                            loc: {
                                start: { line: 1, column: 29 },
                                end: { line: 1, column: 33 }
                            }
                        },
                        rest: null,
                        typeParameters: null,
                        range: [23, 33],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    range: [21, 33],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 33 }
                    }
                },
                range: [13, 33],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 33 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },
        'function foo(callback: () => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'FunctionTypeAnnotation',
                        params: [],
                        returnType: {
                            type: 'NumberTypeAnnotation',
                            range: [29, 35],
                            loc: {
                                start: { line: 1, column: 29 },
                                end: { line: 1, column: 35 }
                            }
                        },
                        rest: null,
                        typeParameters: null,
                        range: [23, 35],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 35 }
                        }
                    },
                    range: [21, 35],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 35 }
                    }
                },
                range: [13, 35],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 35 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [36, 38],
                loc: {
                    start: { line: 1, column: 36 },
                    end: { line: 1, column: 38 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 38],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 38 }
            }
        },
        'function foo(callback: (_:bool) => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'FunctionTypeAnnotation',
                        params: [{
                            type: 'FunctionTypeParam',
                            name: {
                                type: 'Identifier',
                                name: '_',
                                range: [24, 25],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 25 }
                                }
                            },
                            typeAnnotation: {
                                type: 'BooleanTypeAnnotation',
                                range: [26, 30],
                                loc: {
                                    start: { line: 1, column: 26 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            optional: false,
                            range: [24, 30],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 30 }
                            }
                        }],
                        returnType: {
                            type: 'NumberTypeAnnotation',
                            range: [35, 41],
                            loc: {
                                start: { line: 1, column: 35 },
                                end: { line: 1, column: 41 }
                            }
                        },
                        rest: null,
                        typeParameters: null,
                        range: [23, 41],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 41 }
                        }
                    },
                    range: [21, 41],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 41 }
                    }
                },
                range: [13, 41],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 41 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [42, 44],
                loc: {
                    start: { line: 1, column: 42 },
                    end: { line: 1, column: 44 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 44],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 44 }
            }
        },
        'function foo(callback: (_1:bool, _2:string) => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'FunctionTypeAnnotation',
                        params: [{
                            type: 'FunctionTypeParam',
                            name: {
                                type: 'Identifier',
                                name: '_1',
                                range: [24, 26],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 26 }
                                }
                            },
                            typeAnnotation: {
                                type: 'BooleanTypeAnnotation',
                                range: [27, 31],
                                loc: {
                                    start: { line: 1, column: 27 },
                                    end: { line: 1, column: 31 }
                                }
                            },
                            optional: false,
                            range: [24, 31],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 31 }
                            }
                        }, {
                            type: 'FunctionTypeParam',
                            name: {
                                type: 'Identifier',
                                name: '_2',
                                range: [33, 35],
                                loc: {
                                    start: { line: 1, column: 33 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            typeAnnotation: {
                                type: 'StringTypeAnnotation',
                                range: [36, 42],
                                loc: {
                                    start: { line: 1, column: 36 },
                                    end: { line: 1, column: 42 }
                                }
                            },
                            optional: false,
                            range: [33, 42],
                            loc: {
                                start: { line: 1, column: 33 },
                                end: { line: 1, column: 42 }
                            }
                        }],
                        returnType: {
                            type: 'NumberTypeAnnotation',
                            range: [47, 53],
                            loc: {
                                start: { line: 1, column: 47 },
                                end: { line: 1, column: 53 }
                            }
                        },
                        rest: null,
                        typeParameters: null,
                        range: [23, 53],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 53 }
                        }
                    },
                    range: [21, 53],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 53 }
                    }
                },
                range: [13, 53],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 53 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [54, 56],
                loc: {
                    start: { line: 1, column: 54 },
                    end: { line: 1, column: 56 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 56],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 56 }
            }
        },
        'function foo(callback: (_1:bool, ...foo:Array<number>) => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'FunctionTypeAnnotation',
                        params: [{
                            type: 'FunctionTypeParam',
                            name: {
                                type: 'Identifier',
                                name: '_1',
                                range: [24, 26],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 26 }
                                }
                            },
                            typeAnnotation: {
                                type: 'BooleanTypeAnnotation',
                                range: [27, 31],
                                loc: {
                                    start: { line: 1, column: 27 },
                                    end: { line: 1, column: 31 }
                                }
                            },
                            optional: false,
                            range: [24, 31],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 31 }
                            }
                        }],
                        returnType: {
                            type: 'NumberTypeAnnotation',
                            range: [58, 64],
                            loc: {
                                start: { line: 1, column: 58 },
                                end: { line: 1, column: 64 }
                            }
                        },
                        rest: {
                            type: 'FunctionTypeParam',
                            name: {
                                type: 'Identifier',
                                name: 'foo',
                                range: [36, 39],
                                loc: {
                                    start: { line: 1, column: 36 },
                                    end: { line: 1, column: 39 }
                                }
                            },
                            typeAnnotation: {
                                type: 'GenericTypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'Array',
                                    range: [40, 45],
                                    loc: {
                                        start: { line: 1, column: 40 },
                                        end: { line: 1, column: 45 }
                                    }
                                },
                                typeParameters: {
                                    type: 'TypeParameterInstantiation',
                                    params: [{
                                        type: 'NumberTypeAnnotation',
                                        range: [46, 52],
                                        loc: {
                                            start: { line: 1, column: 46 },
                                            end: { line: 1, column: 52 }
                                        }
                                    }],
                                    range: [45, 53],
                                    loc: {
                                        start: { line: 1, column: 45 },
                                        end: { line: 1, column: 53 }
                                    }
                                },
                                range: [40, 53],
                                loc: {
                                    start: { line: 1, column: 40 },
                                    end: { line: 1, column: 53 }
                                }
                            },
                            optional: false,
                            range: [36, 53],
                            loc: {
                                start: { line: 1, column: 36 },
                                end: { line: 1, column: 53 }
                            }
                        },
                        typeParameters: null,
                        range: [23, 64],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 64 }
                        }
                    },
                    range: [21, 64],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 64 }
                    }
                },
                range: [13, 64],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 64 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [65, 67],
                loc: {
                    start: { line: 1, column: 65 },
                    end: { line: 1, column: 67 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 67],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 67 }
            }
        },
        'function foo():number{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [21, 23],
                loc: {
                    start: { line: 1, column: 21 },
                    end: { line: 1, column: 23 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                typeAnnotation: {
                    type: 'NumberTypeAnnotation',
                    range: [15, 21],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 21 }
                    }
                },
                range: [14, 21],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 21 }
                }
            },
            range: [0, 23],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 23 }
            }
        },
        'function foo():() => void{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [25, 27],
                loc: {
                    start: { line: 1, column: 25 },
                    end: { line: 1, column: 27 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                typeAnnotation: {
                    type: 'FunctionTypeAnnotation',
                    params: [],
                    returnType: {
                        type: 'VoidTypeAnnotation',
                        range: [21, 25],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 25 }
                        }
                    },
                    rest: null,
                    typeParameters: null,
                    range: [15, 25],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 25 }
                    }
                },
                range: [14, 25],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 25 }
                }
            },
            range: [0, 27],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 27 }
            }
        },
        'function foo():(_:bool) => number{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [33, 35],
                loc: {
                    start: { line: 1, column: 33 },
                    end: { line: 1, column: 35 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                typeAnnotation: {
                    type: 'FunctionTypeAnnotation',
                    params: [{
                        type: 'FunctionTypeParam',
                        name: {
                            type: 'Identifier',
                            name: '_',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        typeAnnotation: {
                            type: 'BooleanTypeAnnotation',
                            range: [18, 22],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 22 }
                            }
                        },
                        optional: false,
                        range: [16, 22],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 22 }
                        }
                    }],
                    returnType: {
                        type: 'NumberTypeAnnotation',
                        range: [27, 33],
                        loc: {
                            start: { line: 1, column: 27 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    rest: null,
                    typeParameters: null,
                    range: [15, 33],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 33 }
                    }
                },
                range: [14, 33],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 33 }
                }
            },
            range: [0, 35],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 35 }
            }
        },
        'function foo():(_?:bool) => number{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                typeAnnotation: {
                    type: 'FunctionTypeAnnotation',
                    params: [{
                        type: 'FunctionTypeParam',
                        name: {
                            type: 'Identifier',
                            name: '_',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        typeAnnotation: {
                            type: 'BooleanTypeAnnotation',
                            range: [19, 23],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 23 }
                            }
                        },
                        optional: true,
                        range: [16, 23],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 23 }
                        }
                    }],
                    returnType: {
                        type: 'NumberTypeAnnotation',
                        range: [28, 34],
                        loc: {
                            start: { line: 1, column: 28 },
                            end: { line: 1, column: 34 }
                        }
                    },
                    rest: null,
                    typeParameters: null,
                    range: [15, 34],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 34 }
                    }
                },
                range: [14, 34],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 34 }
                }
            },
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },
        'function foo(): {} {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [19, 21],
                loc: {
                    start: { line: 1, column: 19 },
                    end: { line: 1, column: 21 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                typeAnnotation: {
                    type: 'ObjectTypeAnnotation',
                    properties: [],
                    indexers: [],
                    callProperties: [],
                    range: [16, 18],
                    loc: {
                        start: { line: 1, column: 16 },
                        end: { line: 1, column: 18 }
                    }
                },
                range: [14, 18],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 18 }
                }
            },
            range: [0, 21],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 21 }
            }
        },
        'function foo<T>() {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [18, 20],
                loc: {
                    start: { line: 1, column: 18 },
                    end: { line: 1, column: 20 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            typeParameters: {
                type: 'TypeParameterDeclaration',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [13, 14],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 14 }
                    }
                }],
                range: [12, 15],
                loc: {
                    start: { line: 1, column: 12 },
                    end: { line: 1, column: 15 }
                }
            },
            range: [0, 20],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 20 }
            }
        },
        'function foo<T,S>() {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [20, 22],
                loc: {
                    start: { line: 1, column: 20 },
                    end: { line: 1, column: 22 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            typeParameters: {
                type: 'TypeParameterDeclaration',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [13, 14],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 14 }
                    }
                }, {
                    type: 'Identifier',
                    name: 'S',
                    range: [15, 16],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 16 }
                    }
                }],
                range: [12, 17],
                loc: {
                    start: { line: 1, column: 12 },
                    end: { line: 1, column: 17 }
                }
            },
            range: [0, 22],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 22 }
            }
        },
        'a=function<T,S>() {}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'FunctionExpression',
                    id: null,
                    params: [],
                    defaults: [],
                    body: {
                        type: 'BlockStatement',
                        body: [],
                        range: [18, 20],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 20 }
                        }
                    },
                    rest: null,
                    generator: false,
                    expression: false,
                    typeParameters: {
                        type: 'TypeParameterDeclaration',
                        params: [{
                            type: 'Identifier',
                            name: 'T',
                            range: [11, 12],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 12 }
                            }
                        }, {
                            type: 'Identifier',
                            name: 'S',
                            range: [13, 14],
                            loc: {
                                start: { line: 1, column: 13 },
                                end: { line: 1, column: 14 }
                            }
                        }],
                        range: [10, 15],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    range: [2, 20],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 20 }
                    }
                },
                range: [0, 20],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 20 }
                }
            },
            range: [0, 20],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 20 }
            }
        },
        'a={set fooProp(value:number){}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'fooProp',
                            range: [7, 14],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [{
                                type: 'Identifier',
                                name: 'value',
                                typeAnnotation: {
                                    type: 'TypeAnnotation',
                                    typeAnnotation: {
                                        type: 'NumberTypeAnnotation',
                                        range: [21, 27],
                                        loc: {
                                            start: { line: 1, column: 21 },
                                            end: { line: 1, column: 27 }
                                        }
                                    },
                                    range: [20, 27],
                                    loc: {
                                        start: { line: 1, column: 20 },
                                        end: { line: 1, column: 27 }
                                    }
                                },
                                range: [15, 27],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 27 }
                                }
                            }],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [28, 30],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            range: [28, 30],
                            loc: {
                                start: { line: 1, column: 28 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        kind: 'set',
                        method: false,
                        shorthand: false,
                        computed: false,
                        range: [3, 30],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 30 }
                        }
                    }],
                    range: [2, 31],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [0, 31],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 31 }
                }
            },
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },
        'a={set fooProp(value:number):void{}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'fooProp',
                            range: [7, 14],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [{
                                type: 'Identifier',
                                name: 'value',
                                typeAnnotation: {
                                    type: 'TypeAnnotation',
                                    typeAnnotation: {
                                        type: 'NumberTypeAnnotation',
                                        range: [21, 27],
                                        loc: {
                                            start: { line: 1, column: 21 },
                                            end: { line: 1, column: 27 }
                                        }
                                    },
                                    range: [20, 27],
                                    loc: {
                                        start: { line: 1, column: 20 },
                                        end: { line: 1, column: 27 }
                                    }
                                },
                                range: [15, 27],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 27 }
                                }
                            }],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [33, 35],
                                loc: {
                                    start: { line: 1, column: 33 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            returnType: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'VoidTypeAnnotation',
                                    range: [29, 33],
                                    loc: {
                                        start: { line: 1, column: 29 },
                                        end: { line: 1, column: 33 }
                                    }
                                },
                                range: [28, 33],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 33 }
                                }
                            },
                            range: [33, 35],
                            loc: {
                                start: { line: 1, column: 33 },
                                end: { line: 1, column: 35 }
                            }
                        },
                        kind: 'set',
                        method: false,
                        shorthand: false,
                        computed: false,
                        range: [3, 35],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 35 }
                        }
                    }],
                    range: [2, 36],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 36 }
                    }
                },
                range: [0, 36],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 36 }
                }
            },
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },
        'a={get fooProp():number{}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'fooProp',
                            range: [7, 14],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [23, 25],
                                loc: {
                                    start: { line: 1, column: 23 },
                                    end: { line: 1, column: 25 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            returnType: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'NumberTypeAnnotation',
                                    range: [17, 23],
                                    loc: {
                                        start: { line: 1, column: 17 },
                                        end: { line: 1, column: 23 }
                                    }
                                },
                                range: [16, 23],
                                loc: {
                                    start: { line: 1, column: 16 },
                                    end: { line: 1, column: 23 }
                                }
                            },
                            range: [23, 25],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 25 }
                            }
                        },
                        kind: 'get',
                        method: false,
                        shorthand: false,
                        computed: false,
                        range: [3, 25],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 25 }
                        }
                    }],
                    range: [2, 26],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 26 }
                    }
                },
                range: [0, 26],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 26 }
                }
            },
            range: [0, 26],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 26 }
            }
        },
        'a={id<T>(x: T): T {}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'id',
                            range: [3, 5],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 5 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [{
                                type: 'Identifier',
                                name: 'x',
                                typeAnnotation: {
                                    type: 'TypeAnnotation',
                                    typeAnnotation: {
                                        type: 'GenericTypeAnnotation',
                                        id: {
                                            type: 'Identifier',
                                            name: 'T',
                                            range: [12, 13],
                                            loc: {
                                                start: { line: 1, column: 12 },
                                                end: { line: 1, column: 13 }
                                            }
                                        },
                                        typeParameters: null,
                                        range: [12, 13],
                                        loc: {
                                            start: { line: 1, column: 12 },
                                            end: { line: 1, column: 13 }
                                        }
                                    },
                                    range: [10, 13],
                                    loc: {
                                        start: { line: 1, column: 10 },
                                        end: { line: 1, column: 13 }
                                    }
                                },
                                range: [9, 13],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 13 }
                                }
                            }],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [18, 20],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 20 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            returnType: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'T',
                                        range: [16, 17],
                                        loc: {
                                            start: { line: 1, column: 16 },
                                            end: { line: 1, column: 17 }
                                        }
                                    },
                                    typeParameters: null,
                                    range: [16, 17],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 17 }
                                    }
                                },
                                range: [14, 17],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 17 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterDeclaration',
                                params: [{
                                    type: 'Identifier',
                                    name: 'T',
                                    range: [6, 7],
                                    loc: {
                                        start: { line: 1, column: 6 },
                                        end: { line: 1, column: 7 }
                                    }
                                }],
                                range: [5, 8],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 8 }
                                }
                            },
                            range: [18, 20],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 20 }
                            }
                        },
                        kind: 'init',
                        method: true,
                        shorthand: false,
                        computed: false,
                        range: [3, 20],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 20 }
                        }
                    }],
                    range: [2, 21],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 21 }
                    }
                },
                range: [0, 21],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 21 }
                }
            },
            range: [0, 21],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 21 }
            }
        },
        'a={*id<T>(x: T): T {}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'id',
                            range: [4, 6],
                            loc: {
                                start: { line: 1, column: 4 },
                                end: { line: 1, column: 6 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [{
                                type: 'Identifier',
                                name: 'x',
                                typeAnnotation: {
                                    type: 'TypeAnnotation',
                                    typeAnnotation: {
                                        type: 'GenericTypeAnnotation',
                                        id: {
                                            type: 'Identifier',
                                            name: 'T',
                                            range: [13, 14],
                                            loc: {
                                                start: { line: 1, column: 13 },
                                                end: { line: 1, column: 14 }
                                            }
                                        },
                                        typeParameters: null,
                                        range: [13, 14],
                                        loc: {
                                            start: { line: 1, column: 13 },
                                            end: { line: 1, column: 14 }
                                        }
                                    },
                                    range: [11, 14],
                                    loc: {
                                        start: { line: 1, column: 11 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                range: [10, 14],
                                loc: {
                                    start: { line: 1, column: 10 },
                                    end: { line: 1, column: 14 }
                                }
                            }],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [19, 21],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 21 }
                                }
                            },
                            rest: null,
                            generator: true,
                            expression: false,
                            returnType: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'T',
                                        range: [17, 18],
                                        loc: {
                                            start: { line: 1, column: 17 },
                                            end: { line: 1, column: 18 }
                                        }
                                    },
                                    typeParameters: null,
                                    range: [17, 18],
                                    loc: {
                                        start: { line: 1, column: 17 },
                                        end: { line: 1, column: 18 }
                                    }
                                },
                                range: [15, 18],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 18 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterDeclaration',
                                params: [{
                                    type: 'Identifier',
                                    name: 'T',
                                    range: [7, 8],
                                    loc: {
                                        start: { line: 1, column: 7 },
                                        end: { line: 1, column: 8 }
                                    }
                                }],
                                range: [6, 9],
                                loc: {
                                    start: { line: 1, column: 6 },
                                    end: { line: 1, column: 9 }
                                }
                            },
                            range: [19, 21],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        kind: 'init',
                        method: true,
                        shorthand: false,
                        computed: false,
                        range: [3, 21],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 21 }
                        }
                    }],
                    range: [2, 22],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 22 }
                    }
                },
                range: [0, 22],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 22 }
                }
            },
            range: [0, 22],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 22 }
            }
        },
        'a={async id<T>(x: T): T {}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'id',
                            range: [9, 11],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 11 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [{
                                type: 'Identifier',
                                name: 'x',
                                typeAnnotation: {
                                    type: 'TypeAnnotation',
                                    typeAnnotation: {
                                        type: 'GenericTypeAnnotation',
                                        id: {
                                            type: 'Identifier',
                                            name: 'T',
                                            range: [18, 19],
                                            loc: {
                                                start: { line: 1, column: 18 },
                                                end: { line: 1, column: 19 }
                                            }
                                        },
                                        typeParameters: null,
                                        range: [18, 19],
                                        loc: {
                                            start: { line: 1, column: 18 },
                                            end: { line: 1, column: 19 }
                                        }
                                    },
                                    range: [16, 19],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 19 }
                                    }
                                },
                                range: [15, 19],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 19 }
                                }
                            }],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [24, 26],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 26 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            returnType: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'T',
                                        range: [22, 23],
                                        loc: {
                                            start: { line: 1, column: 22 },
                                            end: { line: 1, column: 23 }
                                        }
                                    },
                                    typeParameters: null,
                                    range: [22, 23],
                                    loc: {
                                        start: { line: 1, column: 22 },
                                        end: { line: 1, column: 23 }
                                    }
                                },
                                range: [20, 23],
                                loc: {
                                    start: { line: 1, column: 20 },
                                    end: { line: 1, column: 23 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterDeclaration',
                                params: [{
                                    type: 'Identifier',
                                    name: 'T',
                                    range: [12, 13],
                                    loc: {
                                        start: { line: 1, column: 12 },
                                        end: { line: 1, column: 13 }
                                    }
                                }],
                                range: [11, 14],
                                loc: {
                                    start: { line: 1, column: 11 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            async: true,
                            range: [24, 26],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        kind: 'init',
                        method: true,
                        shorthand: false,
                        computed: false,
                        range: [3, 26],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 26 }
                        }
                    }],
                    range: [2, 27],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [0, 27],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 27 }
                }
            },
            range: [0, 27],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 27 }
            }
        },
        'a={123<T>(x: T): T {}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Literal',
                            value: 123,
                            raw: '123',
                            range: [3, 6],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 6 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [{
                                type: 'Identifier',
                                name: 'x',
                                typeAnnotation: {
                                    type: 'TypeAnnotation',
                                    typeAnnotation: {
                                        type: 'GenericTypeAnnotation',
                                        id: {
                                            type: 'Identifier',
                                            name: 'T',
                                            range: [13, 14],
                                            loc: {
                                                start: { line: 1, column: 13 },
                                                end: { line: 1, column: 14 }
                                            }
                                        },
                                        typeParameters: null,
                                        range: [13, 14],
                                        loc: {
                                            start: { line: 1, column: 13 },
                                            end: { line: 1, column: 14 }
                                        }
                                    },
                                    range: [11, 14],
                                    loc: {
                                        start: { line: 1, column: 11 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                range: [10, 14],
                                loc: {
                                    start: { line: 1, column: 10 },
                                    end: { line: 1, column: 14 }
                                }
                            }],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [19, 21],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 21 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            returnType: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'T',
                                        range: [17, 18],
                                        loc: {
                                            start: { line: 1, column: 17 },
                                            end: { line: 1, column: 18 }
                                        }
                                    },
                                    typeParameters: null,
                                    range: [17, 18],
                                    loc: {
                                        start: { line: 1, column: 17 },
                                        end: { line: 1, column: 18 }
                                    }
                                },
                                range: [15, 18],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 18 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterDeclaration',
                                params: [{
                                    type: 'Identifier',
                                    name: 'T',
                                    range: [7, 8],
                                    loc: {
                                        start: { line: 1, column: 7 },
                                        end: { line: 1, column: 8 }
                                    }
                                }],
                                range: [6, 9],
                                loc: {
                                    start: { line: 1, column: 6 },
                                    end: { line: 1, column: 9 }
                                }
                            },
                            range: [19, 21],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        kind: 'init',
                        method: true,
                        shorthand: false,
                        computed: false,
                        range: [3, 21],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 21 }
                        }
                    }],
                    range: [2, 22],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 22 }
                    }
                },
                range: [0, 22],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 22 }
                }
            },
            range: [0, 22],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 22 }
            }
        },
        'class Foo {set fooProp(value:number){}}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'fooProp',
                        range: [15, 22],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 22 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [{
                            type: 'Identifier',
                            name: 'value',
                            typeAnnotation: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'NumberTypeAnnotation',
                                    range: [29, 35],
                                    loc: {
                                        start: { line: 1, column: 29 },
                                        end: { line: 1, column: 35 }
                                    }
                                },
                                range: [28, 35],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            range: [23, 35],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 35 }
                            }
                        }],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [36, 38],
                            loc: {
                                start: { line: 1, column: 36 },
                                end: { line: 1, column: 38 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        range: [36, 38],
                        loc: {
                            start: { line: 1, column: 36 },
                            end: { line: 1, column: 38 }
                        }
                    },
                    kind: 'set',
                    'static': false,
                    computed: false,
                    range: [11, 38],
                    loc: {
                        start: { line: 1, column: 11 },
                        end: { line: 1, column: 38 }
                    }
                }],
                range: [10, 39],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 39 }
                }
            },
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },
        'class Foo {set fooProp(value:number):void{}}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'fooProp',
                        range: [15, 22],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 22 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [{
                            type: 'Identifier',
                            name: 'value',
                            typeAnnotation: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'NumberTypeAnnotation',
                                    range: [29, 35],
                                    loc: {
                                        start: { line: 1, column: 29 },
                                        end: { line: 1, column: 35 }
                                    }
                                },
                                range: [28, 35],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            range: [23, 35],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 35 }
                            }
                        }],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [41, 43],
                            loc: {
                                start: { line: 1, column: 41 },
                                end: { line: 1, column: 43 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        returnType: {
                            type: 'TypeAnnotation',
                            typeAnnotation: {
                                type: 'VoidTypeAnnotation',
                                range: [37, 41],
                                loc: {
                                    start: { line: 1, column: 37 },
                                    end: { line: 1, column: 41 }
                                }
                            },
                            range: [36, 41],
                            loc: {
                                start: { line: 1, column: 36 },
                                end: { line: 1, column: 41 }
                            }
                        },
                        range: [41, 43],
                        loc: {
                            start: { line: 1, column: 41 },
                            end: { line: 1, column: 43 }
                        }
                    },
                    kind: 'set',
                    'static': false,
                    computed: false,
                    range: [11, 43],
                    loc: {
                        start: { line: 1, column: 11 },
                        end: { line: 1, column: 43 }
                    }
                }],
                range: [10, 44],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 44 }
                }
            },
            range: [0, 44],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 44 }
            }
        },
        'class Foo {get fooProp():number{}}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'fooProp',
                        range: [15, 22],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 22 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [31, 33],
                            loc: {
                                start: { line: 1, column: 31 },
                                end: { line: 1, column: 33 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        returnType: {
                            type: 'TypeAnnotation',
                            typeAnnotation: {
                                type: 'NumberTypeAnnotation',
                                range: [25, 31],
                                loc: {
                                    start: { line: 1, column: 25 },
                                    end: { line: 1, column: 31 }
                                }
                            },
                            range: [24, 31],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 31 }
                            }
                        },
                        range: [31, 33],
                        loc: {
                            start: { line: 1, column: 31 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    kind: 'get',
                    'static': false,
                    computed: false,
                    range: [11, 33],
                    loc: {
                        start: { line: 1, column: 11 },
                        end: { line: 1, column: 33 }
                    }
                }],
                range: [10, 34],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 34 }
                }
            },
            range: [0, 34],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 34 }
            }
        },
        'var numVal:number;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'numVal',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'NumberTypeAnnotation',
                            range: [11, 17],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        range: [10, 17],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    range: [4, 17],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 17 }
                    }
                },
                init: null,
                range: [4, 17],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 17 }
                }
            }],
            kind: 'var',
            range: [0, 18],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 18 }
            }
        },
        'var numVal:number = otherNumVal;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'numVal',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'NumberTypeAnnotation',
                            range: [11, 17],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        range: [10, 17],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    range: [4, 17],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 17 }
                    }
                },
                init: {
                    type: 'Identifier',
                    name: 'otherNumVal',
                    range: [20, 31],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [4, 31],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 31 }
                }
            }],
            kind: 'var',
            range: [0, 32],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 32 }
            }
        },
        'var a: {numVal: number};': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'numVal',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                value: {
                                    type: 'NumberTypeAnnotation',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                optional: false,
                                range: [8, 22],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 22 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 23],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 23 }
                            }
                        },
                        range: [5, 23],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    range: [4, 23],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 23 }
                    }
                },
                init: null,
                range: [4, 23],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 23 }
                }
            }],
            kind: 'var',
            range: [0, 24],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 24 }
            }
        },
        'var a: {numVal: number;};': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'numVal',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                value: {
                                    type: 'NumberTypeAnnotation',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                optional: false,
                                range: [8, 22],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 22 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 24],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 24 }
                            }
                        },
                        range: [5, 24],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    range: [4, 24],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 24 }
                    }
                },
                init: null,
                range: [4, 24],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 24 }
                }
            }],
            kind: 'var',
            range: [0, 25],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 25 }
            }
        },
        'var a: {numVal: number, [indexer: string]: number}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'numVal',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                value: {
                                    type: 'NumberTypeAnnotation',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                optional: false,
                                range: [8, 22],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 22 }
                                }
                            }],
                            indexers: [{
                                type: 'ObjectTypeIndexer',
                                id: {
                                    type: 'Identifier',
                                    name: 'indexer',
                                    range: [25, 32],
                                    loc: {
                                        start: { line: 1, column: 25 },
                                        end: { line: 1, column: 32 }
                                    }
                                },
                                key: {
                                    type: 'StringTypeAnnotation',
                                    range: [34, 40],
                                    loc: {
                                        start: { line: 1, column: 34 },
                                        end: { line: 1, column: 40 }
                                    }
                                },
                                value: {
                                    type: 'NumberTypeAnnotation',
                                    range: [43, 49],
                                    loc: {
                                        start: { line: 1, column: 43 },
                                        end: { line: 1, column: 49 }
                                    }
                                },
                                range: [24, 49],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 49 }
                                }
                            }],
                            callProperties: [],
                            range: [7, 50],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 50 }
                            }
                        },
                        range: [5, 50],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 50 }
                        }
                    },
                    range: [4, 50],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 50 }
                    }
                },
                init: null,
                range: [4, 50],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 50 }
                }
            }],
            kind: 'var',
            range: [0, 51],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 51 }
            }
        },
        'var a: ?{numVal: number};': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'NullableTypeAnnotation',
                            typeAnnotation: {
                                type: 'ObjectTypeAnnotation',
                                properties: [{
                                    type: 'ObjectTypeProperty',
                                    key: {
                                        type: 'Identifier',
                                        name: 'numVal',
                                        range: [9, 15],
                                        loc: {
                                            start: { line: 1, column: 9 },
                                            end: { line: 1, column: 15 }
                                        }
                                    },
                                    value: {
                                        type: 'NumberTypeAnnotation',
                                        range: [17, 23],
                                        loc: {
                                            start: { line: 1, column: 17 },
                                            end: { line: 1, column: 23 }
                                        }
                                    },
                                    optional: false,
                                    range: [9, 23],
                                    loc: {
                                        start: { line: 1, column: 9 },
                                        end: { line: 1, column: 23 }
                                    }
                                }],
                                indexers: [],
                                callProperties: [],
                                range: [8, 24],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 24 }
                                }
                            },
                            range: [7, 24],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 24 }
                            }
                        },
                        range: [5, 24],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    range: [4, 24],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 24 }
                    }
                },
                init: null,
                range: [4, 24],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 24 }
                }
            }],
            kind: 'var',
            range: [0, 25],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 25 }
            }
        },
        'var a: {numVal: number, strVal: string}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'numVal',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                value: {
                                    type: 'NumberTypeAnnotation',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                optional: false,
                                range: [8, 22],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 22 }
                                }
                            }, {
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'strVal',
                                    range: [24, 30],
                                    loc: {
                                        start: { line: 1, column: 24 },
                                        end: { line: 1, column: 30 }
                                    }
                                },
                                value: {
                                    type: 'StringTypeAnnotation',
                                    range: [32, 38],
                                    loc: {
                                        start: { line: 1, column: 32 },
                                        end: { line: 1, column: 38 }
                                    }
                                },
                                optional: false,
                                range: [24, 38],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 38 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 39],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 39 }
                            }
                        },
                        range: [5, 39],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [4, 39],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 39 }
                    }
                },
                init: null,
                range: [4, 39],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 39 }
                }
            }],
            kind: 'var',
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },
        'var a: {subObj: {strVal: string}}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'subObj',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                value: {
                                    type: 'ObjectTypeAnnotation',
                                    properties: [{
                                        type: 'ObjectTypeProperty',
                                        key: {
                                            type: 'Identifier',
                                            name: 'strVal',
                                            range: [17, 23],
                                            loc: {
                                                start: { line: 1, column: 17 },
                                                end: { line: 1, column: 23 }
                                            }
                                        },
                                        value: {
                                            type: 'StringTypeAnnotation',
                                            range: [25, 31],
                                            loc: {
                                                start: { line: 1, column: 25 },
                                                end: { line: 1, column: 31 }
                                            }
                                        },
                                        optional: false,
                                        range: [17, 31],
                                        loc: {
                                            start: { line: 1, column: 17 },
                                            end: { line: 1, column: 31 }
                                        }
                                    }],
                                    indexers: [],
                                    callProperties: [],
                                    range: [16, 32],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 32 }
                                    }
                                },
                                optional: false,
                                range: [8, 32],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 32 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 33],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 33 }
                            }
                        },
                        range: [5, 33],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    range: [4, 33],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 33 }
                    }
                },
                init: null,
                range: [4, 33],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 33 }
                }
            }],
            kind: 'var',
            range: [0, 33],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 33 }
            }
        },
        'var a: {subObj: ?{strVal: string}}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'subObj',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                value: {
                                    type: 'NullableTypeAnnotation',
                                    typeAnnotation: {
                                        type: 'ObjectTypeAnnotation',
                                        properties: [{
                                            type: 'ObjectTypeProperty',
                                            key: {
                                                type: 'Identifier',
                                                name: 'strVal',
                                                range: [18, 24],
                                                loc: {
                                                    start: { line: 1, column: 18 },
                                                    end: { line: 1, column: 24 }
                                                }
                                            },
                                            value: {
                                                type: 'StringTypeAnnotation',
                                                range: [26, 32],
                                                loc: {
                                                    start: { line: 1, column: 26 },
                                                    end: { line: 1, column: 32 }
                                                }
                                            },
                                            optional: false,
                                            range: [18, 32],
                                            loc: {
                                                start: { line: 1, column: 18 },
                                                end: { line: 1, column: 32 }
                                            }
                                        }],
                                        indexers: [],
                                        callProperties: [],
                                        range: [17, 33],
                                        loc: {
                                            start: { line: 1, column: 17 },
                                            end: { line: 1, column: 33 }
                                        }
                                    },
                                    range: [16, 33],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 33 }
                                    }
                                },
                                optional: false,
                                range: [8, 33],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 33 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 34],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 34 }
                            }
                        },
                        range: [5, 34],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 34 }
                        }
                    },
                    range: [4, 34],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 34 }
                    }
                },
                init: null,
                range: [4, 34],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 34 }
                }
            }],
            kind: 'var',
            range: [0, 34],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 34 }
            }
        },
        'var a: {param1: number, param2: string}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'param1',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                value: {
                                    type: 'NumberTypeAnnotation',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                optional: false,
                                range: [8, 22],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 22 }
                                }
                            }, {
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'param2',
                                    range: [24, 30],
                                    loc: {
                                        start: { line: 1, column: 24 },
                                        end: { line: 1, column: 30 }
                                    }
                                },
                                value: {
                                    type: 'StringTypeAnnotation',
                                    range: [32, 38],
                                    loc: {
                                        start: { line: 1, column: 32 },
                                        end: { line: 1, column: 38 }
                                    }
                                },
                                optional: false,
                                range: [24, 38],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 38 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 39],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 39 }
                            }
                        },
                        range: [5, 39],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [4, 39],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 39 }
                    }
                },
                init: null,
                range: [4, 39],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 39 }
                }
            }],
            kind: 'var',
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },
        'var a: {param1: number, param2?: string}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'param1',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                value: {
                                    type: 'NumberTypeAnnotation',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                optional: false,
                                range: [8, 22],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 22 }
                                }
                            }, {
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'param2',
                                    range: [24, 30],
                                    loc: {
                                        start: { line: 1, column: 24 },
                                        end: { line: 1, column: 30 }
                                    }
                                },
                                value: {
                                    type: 'StringTypeAnnotation',
                                    range: [33, 39],
                                    loc: {
                                        start: { line: 1, column: 33 },
                                        end: { line: 1, column: 39 }
                                    }
                                },
                                optional: true,
                                range: [24, 39],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 39 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 40],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 40 }
                            }
                        },
                        range: [5, 40],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 40 }
                        }
                    },
                    range: [4, 40],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 40 }
                    }
                },
                init: null,
                range: [4, 40],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 40 }
                }
            }],
            kind: 'var',
            range: [0, 40],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 40 }
            }
        },
        'var a: { [a: number]: string, [b: number]: string; };': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [],
                            indexers: [{
                                type: 'ObjectTypeIndexer',
                                id: {
                                    type: 'Identifier',
                                    name: 'a',
                                    range: [10, 11],
                                    loc: {
                                        start: { line: 1, column: 10 },
                                        end: { line: 1, column: 11 }
                                    }
                                },
                                key: {
                                    type: 'NumberTypeAnnotation',
                                    range: [13, 19],
                                    loc: {
                                        start: { line: 1, column: 13 },
                                        end: { line: 1, column: 19 }
                                    }
                                },
                                value: {
                                    type: 'StringTypeAnnotation',
                                    range: [22, 28],
                                    loc: {
                                        start: { line: 1, column: 22 },
                                        end: { line: 1, column: 28 }
                                    }
                                },
                                range: [9, 28],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 28 }
                                }
                            }, {
                                type: 'ObjectTypeIndexer',
                                id: {
                                    type: 'Identifier',
                                    name: 'b',
                                    range: [31, 32],
                                    loc: {
                                        start: { line: 1, column: 31 },
                                        end: { line: 1, column: 32 }
                                    }
                                },
                                key: {
                                    type: 'NumberTypeAnnotation',
                                    range: [34, 40],
                                    loc: {
                                        start: { line: 1, column: 34 },
                                        end: { line: 1, column: 40 }
                                    }
                                },
                                value: {
                                    type: 'StringTypeAnnotation',
                                    range: [43, 49],
                                    loc: {
                                        start: { line: 1, column: 43 },
                                        end: { line: 1, column: 49 }
                                    }
                                },
                                range: [30, 49],
                                loc: {
                                    start: { line: 1, column: 30 },
                                    end: { line: 1, column: 49 }
                                }
                            }],
                            callProperties: [],
                            range: [7, 52],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 52 }
                            }
                        },
                        range: [5, 52],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 52 }
                        }
                    },
                    range: [4, 52],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 52 }
                    }
                },
                init: null,
                range: [4, 52],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 52 }
                }
            }],
            kind: 'var',
            range: [0, 53],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 53 }
            }
        },
        'var a: {add(x:number, ...y:Array<string>): void}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'add',
                                    range: [8, 11],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 11 }
                                    }
                                },
                                value: {
                                    type: 'FunctionTypeAnnotation',
                                    params: [{
                                        type: 'FunctionTypeParam',
                                        name: {
                                            type: 'Identifier',
                                            name: 'x',
                                            range: [12, 13],
                                            loc: {
                                                start: { line: 1, column: 12 },
                                                end: { line: 1, column: 13 }
                                            }
                                        },
                                        typeAnnotation: {
                                            type: 'NumberTypeAnnotation',
                                            range: [14, 20],
                                            loc: {
                                                start: { line: 1, column: 14 },
                                                end: { line: 1, column: 20 }
                                            }
                                        },
                                        optional: false,
                                        range: [12, 20],
                                        loc: {
                                            start: { line: 1, column: 12 },
                                            end: { line: 1, column: 20 }
                                        }
                                    }],
                                    returnType: {
                                        type: 'VoidTypeAnnotation',
                                        range: [43, 47],
                                        loc: {
                                            start: { line: 1, column: 43 },
                                            end: { line: 1, column: 47 }
                                        }
                                    },
                                    rest: {
                                        type: 'FunctionTypeParam',
                                        name: {
                                            type: 'Identifier',
                                            name: 'y',
                                            range: [25, 26],
                                            loc: {
                                                start: { line: 1, column: 25 },
                                                end: { line: 1, column: 26 }
                                            }
                                        },
                                        typeAnnotation: {
                                            type: 'GenericTypeAnnotation',
                                            id: {
                                                type: 'Identifier',
                                                name: 'Array',
                                                range: [27, 32],
                                                loc: {
                                                    start: { line: 1, column: 27 },
                                                    end: { line: 1, column: 32 }
                                                }
                                            },
                                            typeParameters: {
                                                type: 'TypeParameterInstantiation',
                                                params: [{
                                                    type: 'StringTypeAnnotation',
                                                    range: [33, 39],
                                                    loc: {
                                                        start: { line: 1, column: 33 },
                                                        end: { line: 1, column: 39 }
                                                    }
                                                }],
                                                range: [32, 40],
                                                loc: {
                                                    start: { line: 1, column: 32 },
                                                    end: { line: 1, column: 40 }
                                                }
                                            },
                                            range: [27, 40],
                                            loc: {
                                                start: { line: 1, column: 27 },
                                                end: { line: 1, column: 40 }
                                            }
                                        },
                                        optional: false,
                                        range: [25, 40],
                                        loc: {
                                            start: { line: 1, column: 25 },
                                            end: { line: 1, column: 40 }
                                        }
                                    },
                                    typeParameters: null,
                                    range: [8, 47],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 47 }
                                    }
                                },
                                optional: false,
                                range: [8, 47],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 47 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 48],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 48 }
                            }
                        },
                        range: [5, 48],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 48 }
                        }
                    },
                    range: [4, 48],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 48 }
                    }
                },
                init: null,
                range: [4, 48],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 48 }
                }
            }],
            kind: 'var',
            range: [0, 48],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 48 }
            }
        },
        'var a: { id<T>(x: T): T; }': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'id',
                                    range: [9, 11],
                                    loc: {
                                        start: { line: 1, column: 9 },
                                        end: { line: 1, column: 11 }
                                    }
                                },
                                value: {
                                    type: 'FunctionTypeAnnotation',
                                    params: [{
                                        type: 'FunctionTypeParam',
                                        name: {
                                            type: 'Identifier',
                                            name: 'x',
                                            range: [15, 16],
                                            loc: {
                                                start: { line: 1, column: 15 },
                                                end: { line: 1, column: 16 }
                                            }
                                        },
                                        typeAnnotation: {
                                            type: 'GenericTypeAnnotation',
                                            id: {
                                                type: 'Identifier',
                                                name: 'T',
                                                range: [18, 19],
                                                loc: {
                                                    start: { line: 1, column: 18 },
                                                    end: { line: 1, column: 19 }
                                                }
                                            },
                                            typeParameters: null,
                                            range: [18, 19],
                                            loc: {
                                                start: { line: 1, column: 18 },
                                                end: { line: 1, column: 19 }
                                            }
                                        },
                                        optional: false,
                                        range: [15, 19],
                                        loc: {
                                            start: { line: 1, column: 15 },
                                            end: { line: 1, column: 19 }
                                        }
                                    }],
                                    returnType: {
                                        type: 'GenericTypeAnnotation',
                                        id: {
                                            type: 'Identifier',
                                            name: 'T',
                                            range: [22, 23],
                                            loc: {
                                                start: { line: 1, column: 22 },
                                                end: { line: 1, column: 23 }
                                            }
                                        },
                                        typeParameters: null,
                                        range: [22, 23],
                                        loc: {
                                            start: { line: 1, column: 22 },
                                            end: { line: 1, column: 23 }
                                        }
                                    },
                                    rest: null,
                                    typeParameters: {
                                        type: 'TypeParameterDeclaration',
                                        params: [{
                                            type: 'Identifier',
                                            name: 'T',
                                            range: [12, 13],
                                            loc: {
                                                start: { line: 1, column: 12 },
                                                end: { line: 1, column: 13 }
                                            }
                                        }],
                                        range: [11, 14],
                                        loc: {
                                            start: { line: 1, column: 11 },
                                            end: { line: 1, column: 14 }
                                        }
                                    },
                                    range: [9, 23],
                                    loc: {
                                        start: { line: 1, column: 9 },
                                        end: { line: 1, column: 23 }
                                    }
                                },
                                optional: false,
                                range: [9, 23],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 23 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [7, 26],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        range: [5, 26],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 26 }
                        }
                    },
                    range: [4, 26],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 26 }
                    }
                },
                init: null,
                range: [4, 26],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 26 }
                }
            }],
            kind: 'var',
            range: [0, 26],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 26 }
            }
        },
        'var a:Array<number> = [1, 2, 3]': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'GenericTypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'Array',
                                range: [6, 11],
                                loc: {
                                    start: { line: 1, column: 6 },
                                    end: { line: 1, column: 11 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterInstantiation',
                                params: [{
                                    type: 'NumberTypeAnnotation',
                                    range: [12, 18],
                                    loc: {
                                        start: { line: 1, column: 12 },
                                        end: { line: 1, column: 18 }
                                    }
                                }],
                                range: [11, 19],
                                loc: {
                                    start: { line: 1, column: 11 },
                                    end: { line: 1, column: 19 }
                                }
                            },
                            range: [6, 19],
                            loc: {
                                start: { line: 1, column: 6 },
                                end: { line: 1, column: 19 }
                            }
                        },
                        range: [5, 19],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 19 }
                        }
                    },
                    range: [4, 19],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 19 }
                    }
                },
                init: {
                    type: 'ArrayExpression',
                    elements: [{
                        type: 'Literal',
                        value: 1,
                        raw: '1',
                        range: [23, 24],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 24 }
                        }
                    }, {
                        type: 'Literal',
                        value: 2,
                        raw: '2',
                        range: [26, 27],
                        loc: {
                            start: { line: 1, column: 26 },
                            end: { line: 1, column: 27 }
                        }
                    }, {
                        type: 'Literal',
                        value: 3,
                        raw: '3',
                        range: [29, 30],
                        loc: {
                            start: { line: 1, column: 29 },
                            end: { line: 1, column: 30 }
                        }
                    }],
                    range: [22, 31],
                    loc: {
                        start: { line: 1, column: 22 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [4, 31],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 31 }
                }
            }],
            kind: 'var',
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },
        'a = class Foo<T> { }': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ClassExpression',
                    id: {
                        type: 'Identifier',
                        name: 'Foo',
                        range: [10, 13],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 13 }
                        }
                    },
                    superClass: null,
                    body: {
                        type: 'ClassBody',
                        body: [],
                        range: [17, 20],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 20 }
                        }
                    },
                    typeParameters: {
                        type: 'TypeParameterDeclaration',
                        params: [{
                            type: 'Identifier',
                            name: 'T',
                            range: [14, 15],
                            loc: {
                                start: { line: 1, column: 14 },
                                end: { line: 1, column: 15 }
                            }
                        }],
                        range: [13, 16],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    range: [4, 20],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 20 }
                    }
                },
                range: [0, 20],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 20 }
                }
            },
            range: [0, 20],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 20 }
            }
        },
        'a = class Foo<T> extends Bar<T> { }': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ClassExpression',
                    id: {
                        type: 'Identifier',
                        name: 'Foo',
                        range: [10, 13],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 13 }
                        }
                    },
                    superClass: {
                        type: 'Identifier',
                        name: 'Bar',
                        range: [25, 28],
                        loc: {
                            start: { line: 1, column: 25 },
                            end: { line: 1, column: 28 }
                        }
                    },
                    body: {
                        type: 'ClassBody',
                        body: [],
                        range: [32, 35],
                        loc: {
                            start: { line: 1, column: 32 },
                            end: { line: 1, column: 35 }
                        }
                    },
                    typeParameters: {
                        type: 'TypeParameterDeclaration',
                        params: [{
                            type: 'Identifier',
                            name: 'T',
                            range: [14, 15],
                            loc: {
                                start: { line: 1, column: 14 },
                                end: { line: 1, column: 15 }
                            }
                        }],
                        range: [13, 16],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    superTypeParameters: {
                        type: 'TypeParameterInstantiation',
                        params: [{
                            type: 'GenericTypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'T',
                                range: [29, 30],
                                loc: {
                                    start: { line: 1, column: 29 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            typeParameters: null,
                            range: [29, 30],
                            loc: {
                                start: { line: 1, column: 29 },
                                end: { line: 1, column: 30 }
                            }
                        }],
                        range: [28, 31],
                        loc: {
                            start: { line: 1, column: 28 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    range: [4, 35],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 35 }
                    }
                },
                range: [0, 35],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 35 }
                }
            },
            range: [0, 35],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 35 }
            }
        },
        'class Foo<T> {}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [],
                range: [13, 15],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 15 }
                }
            },
            typeParameters: {
                type: 'TypeParameterDeclaration',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [10, 11],
                    loc: {
                        start: { line: 1, column: 10 },
                        end: { line: 1, column: 11 }
                    }
                }],
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            range: [0, 15],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 15 }
            }
        },
        'class Foo<T> extends Bar<T> { }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: {
                type: 'Identifier',
                name: 'Bar',
                range: [21, 24],
                loc: {
                    start: { line: 1, column: 21 },
                    end: { line: 1, column: 24 }
                }
            },
            body: {
                type: 'ClassBody',
                body: [],
                range: [28, 31],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 31 }
                }
            },
            typeParameters: {
                type: 'TypeParameterDeclaration',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [10, 11],
                    loc: {
                        start: { line: 1, column: 10 },
                        end: { line: 1, column: 11 }
                    }
                }],
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            superTypeParameters: {
                type: 'TypeParameterInstantiation',
                params: [{
                    type: 'GenericTypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'T',
                        range: [25, 26],
                        loc: {
                            start: { line: 1, column: 25 },
                            end: { line: 1, column: 26 }
                        }
                    },
                    typeParameters: null,
                    range: [25, 26],
                    loc: {
                        start: { line: 1, column: 25 },
                        end: { line: 1, column: 26 }
                    }
                }],
                range: [24, 27],
                loc: {
                    start: { line: 1, column: 24 },
                    end: { line: 1, column: 27 }
                }
            },
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },
        '*** class Foo<T> extends mixin(Bar) { }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: 'mixin',
                    range: [21, 26],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 26 }
                    }
                },
                'arguments': [{
                    type: 'Identifier',
                    name: 'Bar',
                    range: [27, 30],
                    loc: {
                        start: { line: 1, column: 27 },
                        end: { line: 1, column: 30 }
                    }
                }],
                range: [21, 31],
                loc: {
                    start: { line: 1, column: 21 },
                    end: { line: 1, column: 31 }
                }
            },
            body: {
                type: 'ClassBody',
                body: [],
                range: [32, 35],
                loc: {
                    start: { line: 1, column: 32 },
                    end: { line: 1, column: 35 }
                }
            },
            typeParameters: {
                type: 'TypeParameterDeclaration',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [10, 11],
                    loc: {
                        start: { line: 1, column: 10 },
                        end: { line: 1, column: 11 }
                    }
                }],
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            range: [0, 35],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 35 }
            }
        },
        'class Foo<T> { bar<U>():number { return 42; }}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'bar',
                        range: [15, 18],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 18 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [{
                                type: 'ReturnStatement',
                                argument: {
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [40, 42],
                                    loc: {
                                        start: { line: 1, column: 40 },
                                        end: { line: 1, column: 42 }
                                    }
                                },
                                range: [33, 43],
                                loc: {
                                    start: { line: 1, column: 33 },
                                    end: { line: 1, column: 43 }
                                }
                            }],
                            range: [31, 45],
                            loc: {
                                start: { line: 1, column: 31 },
                                end: { line: 1, column: 45 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        returnType: {
                            type: 'TypeAnnotation',
                            typeAnnotation: {
                                type: 'NumberTypeAnnotation',
                                range: [24, 30],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            range: [23, 30],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        typeParameters: {
                            type: 'TypeParameterDeclaration',
                            params: [{
                                type: 'Identifier',
                                name: 'U',
                                range: [19, 20],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 20 }
                                }
                            }],
                            range: [18, 21],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        range: [31, 45],
                        loc: {
                            start: { line: 1, column: 31 },
                            end: { line: 1, column: 45 }
                        }
                    },
                    kind: '',
                    'static': false,
                    computed: false,
                    range: [15, 45],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 45 }
                    }
                }],
                range: [13, 46],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 46 }
                }
            },
            typeParameters: {
                type: 'TypeParameterDeclaration',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [10, 11],
                    loc: {
                        start: { line: 1, column: 10 },
                        end: { line: 1, column: 11 }
                    }
                }],
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            range: [0, 46],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 46 }
            }
        },
        'class Foo { "bar"<T>() { } }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Literal',
                        value: 'bar',
                        raw: '"bar"',
                        range: [12, 17],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [23, 26],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        typeParameters: {
                            type: 'TypeParameterDeclaration',
                            params: [{
                                type: 'Identifier',
                                name: 'T',
                                range: [18, 19],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 19 }
                                }
                            }],
                            range: [17, 20],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 20 }
                            }
                        },
                        range: [23, 26],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 26 }
                        }
                    },
                    kind: '',
                    'static': false,
                    computed: false,
                    range: [12, 26],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 26 }
                    }
                }],
                range: [10, 28],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 28 }
                }
            },
            range: [0, 28],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 28 }
            }
        },
        'function foo(requiredParam, optParam?) {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'requiredParam',
                range: [13, 26],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 26 }
                }
            }, {
                type: 'Identifier',
                name: 'optParam',
                optional: true,
                range: [28, 37],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 37 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [39, 41],
                loc: {
                    start: { line: 1, column: 39 },
                    end: { line: 1, column: 41 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 41],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 41 }
            }
        },
        '*** class Foo { prop1:string; prop2:number; }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'ClassProperty',
                    key: {
                        type: 'Identifier',
                        name: 'prop1',
                        range: [12, 17],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'StringTypeAnnotation',
                            range: [18, 24],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 24 }
                            }
                        },
                        range: [17, 24],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    computed: false,
                    'static': false,
                    range: [12, 25],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 25 }
                    }
                }, {
                    type: 'ClassProperty',
                    key: {
                        type: 'Identifier',
                        name: 'prop2',
                        range: [26, 31],
                        loc: {
                            start: { line: 1, column: 26 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'NumberTypeAnnotation',
                            range: [32, 38],
                            loc: {
                                start: { line: 1, column: 32 },
                                end: { line: 1, column: 38 }
                            }
                        },
                        range: [31, 38],
                        loc: {
                            start: { line: 1, column: 31 },
                            end: { line: 1, column: 38 }
                        }
                    },
                    computed: false,
                    'static': false,
                    range: [26, 39],
                    loc: {
                        start: { line: 1, column: 26 },
                        end: { line: 1, column: 39 }
                    }
                }],
                range: [10, 41],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 41 }
                }
            },
            range: [0, 41],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 41 }
            }
        },
        '*** class Foo { static prop1:string; prop2:number; }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'ClassProperty',
                    key: {
                        type: 'Identifier',
                        name: 'prop1',
                        range: [19, 24],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'StringTypeAnnotation',
                            range: [25, 31],
                            loc: {
                                start: { line: 1, column: 25 },
                                end: { line: 1, column: 31 }
                            }
                        },
                        range: [24, 31],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    computed: false,
                    'static': true,
                    range: [12, 32],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 32 }
                    }
                }, {
                    type: 'ClassProperty',
                    key: {
                        type: 'Identifier',
                        name: 'prop2',
                        range: [33, 38],
                        loc: {
                            start: { line: 1, column: 33 },
                            end: { line: 1, column: 38 }
                        }
                    },
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'NumberTypeAnnotation',
                            range: [39, 45],
                            loc: {
                                start: { line: 1, column: 39 },
                                end: { line: 1, column: 45 }
                            }
                        },
                        range: [38, 45],
                        loc: {
                            start: { line: 1, column: 38 },
                            end: { line: 1, column: 45 }
                        }
                    },
                    computed: false,
                    'static': false,
                    range: [33, 46],
                    loc: {
                        start: { line: 1, column: 33 },
                        end: { line: 1, column: 46 }
                    }
                }],
                range: [10, 48],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 48 }
                }
            },
            range: [0, 48],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 48 }
            }
        },
        'var x : number | string = 4;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'x',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'UnionTypeAnnotation',
                            types: [{
                                type: 'NumberTypeAnnotation',
                                range: [8, 14],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 14 }
                                }
                            }, {
                                type: 'StringTypeAnnotation',
                                range: [17, 23],
                                loc: {
                                    start: { line: 1, column: 17 },
                                    end: { line: 1, column: 23 }
                                }
                            }],
                            range: [8, 23],
                            loc: {
                                start: { line: 1, column: 8 },
                                end: { line: 1, column: 23 }
                            }
                        },
                        range: [6, 23],
                        loc: {
                            start: { line: 1, column: 6 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    range: [4, 23],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 23 }
                    }
                },
                init: {
                    type: 'Literal',
                    value: 4,
                    raw: '4',
                    range: [26, 27],
                    loc: {
                        start: { line: 1, column: 26 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [4, 27],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 27 }
                }
            }],
            kind: 'var',
            range: [0, 28],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 28 }
            }
        },
        'class Array { concat(items:number | string) {}; }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Array',
                range: [6, 11],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 11 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'concat',
                        range: [14, 20],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 20 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [{
                            type: 'Identifier',
                            name: 'items',
                            typeAnnotation: {
                                type: 'TypeAnnotation',
                                typeAnnotation: {
                                    type: 'UnionTypeAnnotation',
                                    types: [{
                                        type: 'NumberTypeAnnotation',
                                        range: [27, 33],
                                        loc: {
                                            start: { line: 1, column: 27 },
                                            end: { line: 1, column: 33 }
                                        }
                                    }, {
                                        type: 'StringTypeAnnotation',
                                        range: [36, 42],
                                        loc: {
                                            start: { line: 1, column: 36 },
                                            end: { line: 1, column: 42 }
                                        }
                                    }],
                                    range: [27, 42],
                                    loc: {
                                        start: { line: 1, column: 27 },
                                        end: { line: 1, column: 42 }
                                    }
                                },
                                range: [26, 42],
                                loc: {
                                    start: { line: 1, column: 26 },
                                    end: { line: 1, column: 42 }
                                }
                            },
                            range: [21, 42],
                            loc: {
                                start: { line: 1, column: 21 },
                                end: { line: 1, column: 42 }
                            }
                        }],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [44, 46],
                            loc: {
                                start: { line: 1, column: 44 },
                                end: { line: 1, column: 46 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        range: [44, 46],
                        loc: {
                            start: { line: 1, column: 44 },
                            end: { line: 1, column: 46 }
                        }
                    },
                    kind: '',
                    'static': false,
                    computed: false,
                    range: [14, 46],
                    loc: {
                        start: { line: 1, column: 14 },
                        end: { line: 1, column: 46 }
                    }
                }],
                range: [12, 49],
                loc: {
                    start: { line: 1, column: 12 },
                    end: { line: 1, column: 49 }
                }
            },
            range: [0, 49],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 49 }
            }
        },
        'var x : () => number | () => string = fn;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'x',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'FunctionTypeAnnotation',
                            params: [],
                            returnType: {
                                type: 'UnionTypeAnnotation',
                                types: [{
                                    type: 'NumberTypeAnnotation',
                                    range: [14, 20],
                                    loc: {
                                        start: { line: 1, column: 14 },
                                        end: { line: 1, column: 20 }
                                    }
                                }, {
                                    type: 'FunctionTypeAnnotation',
                                    params: [],
                                    returnType: {
                                        type: 'StringTypeAnnotation',
                                        range: [29, 35],
                                        loc: {
                                            start: { line: 1, column: 29 },
                                            end: { line: 1, column: 35 }
                                        }
                                    },
                                    rest: null,
                                    typeParameters: null,
                                    range: [23, 35],
                                    loc: {
                                        start: { line: 1, column: 23 },
                                        end: { line: 1, column: 35 }
                                    }
                                }],
                                range: [14, 35],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            rest: null,
                            typeParameters: null,
                            range: [8, 35],
                            loc: {
                                start: { line: 1, column: 8 },
                                end: { line: 1, column: 35 }
                            }
                        },
                        range: [6, 35],
                        loc: {
                            start: { line: 1, column: 6 },
                            end: { line: 1, column: 35 }
                        }
                    },
                    range: [4, 35],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 35 }
                    }
                },
                init: {
                    type: 'Identifier',
                    name: 'fn',
                    range: [38, 40],
                    loc: {
                        start: { line: 1, column: 38 },
                        end: { line: 1, column: 40 }
                    }
                },
                range: [4, 40],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 40 }
                }
            }],
            kind: 'var',
            range: [0, 41],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 41 }
            }
        },
        'var x: typeof Y = Y;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'x',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'TypeofTypeAnnotation',
                            argument: {
                                type: 'GenericTypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'Y',
                                    range: [14, 15],
                                    loc: {
                                        start: { line: 1, column: 14 },
                                        end: { line: 1, column: 15 }
                                    }
                                },
                                typeParameters: null,
                                range: [14, 15],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 15 }
                                }
                            },
                            range: [7, 15],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 15 }
                            }
                        },
                        range: [5, 15],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    range: [4, 15],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 15 }
                    }
                },
                init: {
                    type: 'Identifier',
                    name: 'Y',
                    range: [18, 19],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 19 }
                    }
                },
                range: [4, 19],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 19 }
                }
            }],
            kind: 'var',
            range: [0, 20],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 20 }
            }
        },
        'var x: typeof Y | number = Y;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'x',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'UnionTypeAnnotation',
                            types: [{
                                type: 'TypeofTypeAnnotation',
                                argument: {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'Y',
                                        range: [14, 15],
                                        loc: {
                                            start: { line: 1, column: 14 },
                                            end: { line: 1, column: 15 }
                                        }
                                    },
                                    typeParameters: null,
                                    range: [14, 15],
                                    loc: {
                                        start: { line: 1, column: 14 },
                                        end: { line: 1, column: 15 }
                                    }
                                },
                                range: [7, 15],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 15 }
                                }
                            }, {
                                type: 'NumberTypeAnnotation',
                                range: [18, 24],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 24 }
                                }
                            }],
                            range: [7, 24],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 24 }
                            }
                        },
                        range: [5, 24],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    range: [4, 24],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 24 }
                    }
                },
                init: {
                    type: 'Identifier',
                    name: 'Y',
                    range: [27, 28],
                    loc: {
                        start: { line: 1, column: 27 },
                        end: { line: 1, column: 28 }
                    }
                },
                range: [4, 28],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 28 }
                }
            }],
            kind: 'var',
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },
        'var {x}: {x: string; } = { x: "hello" };': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'ObjectPattern',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'x',
                            range: [5, 6],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 6 }
                            }
                        },
                        value: {
                            type: 'Identifier',
                            name: 'x',
                            range: [5, 6],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 6 }
                            }
                        },
                        kind: 'init',
                        method: false,
                        shorthand: true,
                        computed: false,
                        range: [5, 6],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 6 }
                        }
                    }],
                    range: [4, 22],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 22 }
                    },
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'x',
                                    range: [10, 11],
                                    loc: {
                                        start: { line: 1, column: 10 },
                                        end: { line: 1, column: 11 }
                                    }
                                },
                                value: {
                                    type: 'StringTypeAnnotation',
                                    range: [13, 19],
                                    loc: {
                                        start: { line: 1, column: 13 },
                                        end: { line: 1, column: 19 }
                                    }
                                },
                                optional: false,
                                range: [10, 19],
                                loc: {
                                    start: { line: 1, column: 10 },
                                    end: { line: 1, column: 19 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [9, 22],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 22 }
                            }
                        },
                        range: [7, 22],
                        loc: {
                            start: { line: 1, column: 7 },
                            end: { line: 1, column: 22 }
                        }
                    }
                },
                init: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'x',
                            range: [27, 28],
                            loc: {
                                start: { line: 1, column: 27 },
                                end: { line: 1, column: 28 }
                            }
                        },
                        value: {
                            type: 'Literal',
                            value: 'hello',
                            raw: '"hello"',
                            range: [30, 37],
                            loc: {
                                start: { line: 1, column: 30 },
                                end: { line: 1, column: 37 }
                            }
                        },
                        kind: 'init',
                        method: false,
                        shorthand: false,
                        computed: false,
                        range: [27, 37],
                        loc: {
                            start: { line: 1, column: 27 },
                            end: { line: 1, column: 37 }
                        }
                    }],
                    range: [25, 39],
                    loc: {
                        start: { line: 1, column: 25 },
                        end: { line: 1, column: 39 }
                    }
                },
                range: [4, 39],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 39 }
                }
            }],
            kind: 'var',
            range: [0, 40],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 40 }
            }
        },
        'var {x}: {x: string } = { x: "hello" };': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'ObjectPattern',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'x',
                            range: [5, 6],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 6 }
                            }
                        },
                        value: {
                            type: 'Identifier',
                            name: 'x',
                            range: [5, 6],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 6 }
                            }
                        },
                        kind: 'init',
                        method: false,
                        shorthand: true,
                        computed: false,
                        range: [5, 6],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 6 }
                        }
                    }],
                    range: [4, 21],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 21 }
                    },
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [{
                                type: 'ObjectTypeProperty',
                                key: {
                                    type: 'Identifier',
                                    name: 'x',
                                    range: [10, 11],
                                    loc: {
                                        start: { line: 1, column: 10 },
                                        end: { line: 1, column: 11 }
                                    }
                                },
                                value: {
                                    type: 'StringTypeAnnotation',
                                    range: [13, 19],
                                    loc: {
                                        start: { line: 1, column: 13 },
                                        end: { line: 1, column: 19 }
                                    }
                                },
                                optional: false,
                                range: [10, 19],
                                loc: {
                                    start: { line: 1, column: 10 },
                                    end: { line: 1, column: 19 }
                                }
                            }],
                            indexers: [],
                            callProperties: [],
                            range: [9, 21],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        range: [7, 21],
                        loc: {
                            start: { line: 1, column: 7 },
                            end: { line: 1, column: 21 }
                        }
                    }
                },
                init: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'x',
                            range: [26, 27],
                            loc: {
                                start: { line: 1, column: 26 },
                                end: { line: 1, column: 27 }
                            }
                        },
                        value: {
                            type: 'Literal',
                            value: 'hello',
                            raw: '"hello"',
                            range: [29, 36],
                            loc: {
                                start: { line: 1, column: 29 },
                                end: { line: 1, column: 36 }
                            }
                        },
                        kind: 'init',
                        method: false,
                        shorthand: false,
                        computed: false,
                        range: [26, 36],
                        loc: {
                            start: { line: 1, column: 26 },
                            end: { line: 1, column: 36 }
                        }
                    }],
                    range: [24, 38],
                    loc: {
                        start: { line: 1, column: 24 },
                        end: { line: 1, column: 38 }
                    }
                },
                range: [4, 38],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 38 }
                }
            }],
            kind: 'var',
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },        
        'var [x]: Array<string> = [ "hello" ];': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'ArrayPattern',
                    elements: [{
                        type: 'Identifier',
                        name: 'x',
                        range: [5, 6],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 6 }
                        }
                    }],
                    range: [4, 22],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 22 }
                    },
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'GenericTypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'Array',
                                range: [9, 14],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterInstantiation',
                                params: [{
                                    type: 'StringTypeAnnotation',
                                    range: [15, 21],
                                    loc: {
                                        start: { line: 1, column: 15 },
                                        end: { line: 1, column: 21 }
                                    }
                                }],
                                range: [14, 22],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            range: [9, 22],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 22 }
                            }
                        },
                        range: [7, 22],
                        loc: {
                            start: { line: 1, column: 7 },
                            end: { line: 1, column: 22 }
                        }
                    }
                },
                init: {
                    type: 'ArrayExpression',
                    elements: [{
                        type: 'Literal',
                        value: 'hello',
                        raw: '"hello"',
                        range: [27, 34],
                        loc: {
                            start: { line: 1, column: 27 },
                            end: { line: 1, column: 34 }
                        }
                    }],
                    range: [25, 36],
                    loc: {
                        start: { line: 1, column: 25 },
                        end: { line: 1, column: 36 }
                    }
                },
                range: [4, 36],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 36 }
                }
            }],
            kind: 'var',
            range: [0, 37],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 37 }
            }
        },        
        'function foo({x}: { x: string; }) {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'ObjectPattern',
                properties: [{
                    type: 'Property',
                    key: {
                        type: 'Identifier',
                        name: 'x',
                        range: [14, 15],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    value: {
                        type: 'Identifier',
                        name: 'x',
                        range: [14, 15],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    kind: 'init',
                    method: false,
                    shorthand: true,
                    computed: false,
                    range: [14, 15],
                    loc: {
                        start: { line: 1, column: 14 },
                        end: { line: 1, column: 15 }
                    }
                }],
                range: [13, 32],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 32 }
                },
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'ObjectTypeAnnotation',
                        properties: [{
                            type: 'ObjectTypeProperty',
                            key: {
                                type: 'Identifier',
                                name: 'x',
                                range: [20, 21],
                                loc: {
                                    start: { line: 1, column: 20 },
                                    end: { line: 1, column: 21 }
                                }
                            },
                            value: {
                                type: 'StringTypeAnnotation',
                                range: [23, 29],
                                loc: {
                                    start: { line: 1, column: 23 },
                                    end: { line: 1, column: 29 }
                                }
                            },
                            optional: false,
                            range: [20, 29],
                            loc: {
                                start: { line: 1, column: 20 },
                                end: { line: 1, column: 29 }
                            }
                        }],
                        indexers: [],
                        callProperties: [],
                        range: [18, 32],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 32 }
                        }
                    },
                    range: [16, 32],
                    loc: {
                        start: { line: 1, column: 16 },
                        end: { line: 1, column: 32 }
                    }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },
        'function foo([x]: Array<string>) {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'ArrayPattern',
                elements: [{
                    type: 'Identifier',
                    name: 'x',
                    range: [14, 15],
                    loc: {
                        start: { line: 1, column: 14 },
                        end: { line: 1, column: 15 }
                    }
                }],
                range: [13, 31],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 31 }
                },
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'GenericTypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'Array',
                            range: [18, 23],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 23 }
                            }
                        },
                        typeParameters: {
                            type: 'TypeParameterInstantiation',
                            params: [{
                                type: 'StringTypeAnnotation',
                                range: [24, 30],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 30 }
                                }
                            }],
                            range: [23, 31],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 31 }
                            }
                        },
                        range: [18, 31],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    range: [16, 31],
                    loc: {
                        start: { line: 1, column: 16 },
                        end: { line: 1, column: 31 }
                    }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [33, 35],
                loc: {
                    start: { line: 1, column: 33 },
                    end: { line: 1, column: 35 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 35],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 35 }
            }
        },
        'function foo(...rest: Array<number>) {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [37, 39],
                loc: {
                    start: { line: 1, column: 37 },
                    end: { line: 1, column: 39 }
                }
            },
            rest: {
                type: 'Identifier',
                name: 'rest',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    typeAnnotation: {
                        type: 'GenericTypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'Array',
                            range: [22, 27],
                            loc: {
                                start: { line: 1, column: 22 },
                                end: { line: 1, column: 27 }
                            }
                        },
                        typeParameters: {
                            type: 'TypeParameterInstantiation',
                            params: [{
                                type: 'NumberTypeAnnotation',
                                range: [28, 34],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 34 }
                                }
                            }],
                            range: [27, 35],
                            loc: {
                                start: { line: 1, column: 27 },
                                end: { line: 1, column: 35 }
                            }
                        },
                        range: [22, 35],
                        loc: {
                            start: { line: 1, column: 22 },
                            end: { line: 1, column: 35 }
                        }
                    },
                    range: [20, 35],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 35 }
                    }
                },
                range: [16, 35],
                loc: {
                    start: { line: 1, column: 16 },
                    end: { line: 1, column: 35 }
                }
            },
            generator: false,
            expression: false,
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },
        '(function (...rest: Array<number>) {})': {
            type: 'ExpressionStatement',
            expression: {
                type: 'FunctionExpression',
                id: null,
                params: [],
                defaults: [],
                body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [35, 37],
                    loc: {
                        start: { line: 1, column: 35 },
                        end: { line: 1, column: 37 }
                    }
                },
                rest: {
                    type: 'Identifier',
                    name: 'rest',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'GenericTypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'Array',
                                range: [20, 25],
                                loc: {
                                    start: { line: 1, column: 20 },
                                    end: { line: 1, column: 25 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterInstantiation',
                                params: [{
                                    type: 'NumberTypeAnnotation',
                                    range: [26, 32],
                                    loc: {
                                        start: { line: 1, column: 26 },
                                        end: { line: 1, column: 32 }
                                    }
                                }],
                                range: [25, 33],
                                loc: {
                                    start: { line: 1, column: 25 },
                                    end: { line: 1, column: 33 }
                                }
                            },
                            range: [20, 33],
                            loc: {
                                start: { line: 1, column: 20 },
                                end: { line: 1, column: 33 }
                            }
                        },
                        range: [18, 33],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    range: [14, 33],
                    loc: {
                        start: { line: 1, column: 14 },
                        end: { line: 1, column: 33 }
                    }
                },
                generator: false,
                expression: false,
                range: [1, 37],
                loc: {
                    start: { line: 1, column: 1 },
                    end: { line: 1, column: 37 }
                }
            },
            range: [0, 38],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 38 }
            }
        },
        '(...rest: Array<number>) => rest': {
            type: 'ExpressionStatement',
            expression: {
                type: 'ArrowFunctionExpression',
                id: null,
                params: [],
                defaults: [],
                body: {
                    type: 'Identifier',
                    name: 'rest',
                    range: [29, 33],
                    loc: {
                        start: { line: 1, column: 29 },
                        end: { line: 1, column: 33 }
                    }
                },
                rest: {
                    type: 'Identifier',
                    name: 'rest',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'GenericTypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'Array',
                                range: [11, 16],
                                loc: {
                                    start: { line: 1, column: 11 },
                                    end: { line: 1, column: 16 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterInstantiation',
                                params: [{
                                    type: 'NumberTypeAnnotation',
                                    range: [17, 23],
                                    loc: {
                                        start: { line: 1, column: 17 },
                                        end: { line: 1, column: 23 }
                                    }
                                }],
                                range: [16, 24],
                                loc: {
                                    start: { line: 1, column: 16 },
                                    end: { line: 1, column: 24 }
                                }
                            },
                            range: [11, 24],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 24 }
                            }
                        },
                        range: [9, 24],
                        loc: {
                            start: { line: 1, column: 9 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    range: [5, 24],
                    loc: {
                        start: { line: 1, column: 5 },
                        end: { line: 1, column: 24 }
                    }
                },
                generator: false,
                expression: true,
                range: [1, 33],
                loc: {
                    start: { line: 1, column: 1 },
                    end: { line: 1, column: 33 }
                }
            },
            range: [0, 34],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 34 }
            }
        },
        'var a: Map<string, Array<string> >': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'GenericTypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'Map',
                                range: [7, 10],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 10 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterInstantiation',
                                params: [{
                                    type: 'StringTypeAnnotation',
                                    range: [11, 17],
                                    loc: {
                                        start: { line: 1, column: 11 },
                                        end: { line: 1, column: 17 }
                                    }
                                }, {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'Array',
                                        range: [19, 24],
                                        loc: {
                                            start: { line: 1, column: 19 },
                                            end: { line: 1, column: 24 }
                                        }
                                    },
                                    typeParameters: {
                                        type: 'TypeParameterInstantiation',
                                        params: [{
                                            type: 'StringTypeAnnotation',
                                            range: [25, 31],
                                            loc: {
                                                start: { line: 1, column: 25 },
                                                end: { line: 1, column: 31 }
                                            }
                                        }],
                                        range: [24, 32],
                                        loc: {
                                            start: { line: 1, column: 24 },
                                            end: { line: 1, column: 32 }
                                        }
                                    },
                                    range: [19, 32],
                                    loc: {
                                        start: { line: 1, column: 19 },
                                        end: { line: 1, column: 32 }
                                    }
                                }],
                                range: [10, 34],
                                loc: {
                                    start: { line: 1, column: 10 },
                                    end: { line: 1, column: 34 }
                                }
                            },
                            range: [7, 34],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 34 }
                            }
                        },
                        range: [5, 34],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 34 }
                        }
                    },
                    range: [4, 34],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 34 }
                    }
                },
                init: null,
                range: [4, 34],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 34 }
                }
            }],
            kind: 'var',
            range: [0, 34],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 34 }
            }
        },
        'var a: Map<string, Array<string>>': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'GenericTypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'Map',
                                range: [7, 10],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 10 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterInstantiation',
                                params: [{
                                    type: 'StringTypeAnnotation',
                                    range: [11, 17],
                                    loc: {
                                        start: { line: 1, column: 11 },
                                        end: { line: 1, column: 17 }
                                    }
                                }, {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'Array',
                                        range: [19, 24],
                                        loc: {
                                            start: { line: 1, column: 19 },
                                            end: { line: 1, column: 24 }
                                        }
                                    },
                                    typeParameters: {
                                        type: 'TypeParameterInstantiation',
                                        params: [{
                                            type: 'StringTypeAnnotation',
                                            range: [25, 31],
                                            loc: {
                                                start: { line: 1, column: 25 },
                                                end: { line: 1, column: 31 }
                                            }
                                        }],
                                        range: [24, 32],
                                        loc: {
                                            start: { line: 1, column: 24 },
                                            end: { line: 1, column: 32 }
                                        }
                                    },
                                    range: [19, 32],
                                    loc: {
                                        start: { line: 1, column: 19 },
                                        end: { line: 1, column: 32 }
                                    }
                                }],
                                range: [10, 33],
                                loc: {
                                    start: { line: 1, column: 10 },
                                    end: { line: 1, column: 33 }
                                }
                            },
                            range: [7, 33],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 33 }
                            }
                        },
                        range: [5, 33],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    range: [4, 33],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 33 }
                    }
                },
                init: null,
                range: [4, 33],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 33 }
                }
            }],
            kind: 'var',
            range: [0, 33],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 33 }
            }
        },
        'var a: Map<string, Map<string, Array<string>>>': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'GenericTypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'Map',
                                range: [7, 10],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 10 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterInstantiation',
                                params: [{
                                    type: 'StringTypeAnnotation',
                                    range: [11, 17],
                                    loc: {
                                        start: { line: 1, column: 11 },
                                        end: { line: 1, column: 17 }
                                    }
                                }, {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'Map',
                                        range: [19, 22],
                                        loc: {
                                            start: { line: 1, column: 19 },
                                            end: { line: 1, column: 22 }
                                        }
                                    },
                                    typeParameters: {
                                        type: 'TypeParameterInstantiation',
                                        params: [{
                                            type: 'StringTypeAnnotation',
                                            range: [23, 29],
                                            loc: {
                                                start: { line: 1, column: 23 },
                                                end: { line: 1, column: 29 }
                                            }
                                        }, {
                                            type: 'GenericTypeAnnotation',
                                            id: {
                                                type: 'Identifier',
                                                name: 'Array',
                                                range: [31, 36],
                                                loc: {
                                                    start: { line: 1, column: 31 },
                                                    end: { line: 1, column: 36 }
                                                }
                                            },
                                            typeParameters: {
                                                type: 'TypeParameterInstantiation',
                                                params: [{
                                                    type: 'StringTypeAnnotation',
                                                    range: [37, 43],
                                                    loc: {
                                                        start: { line: 1, column: 37 },
                                                        end: { line: 1, column: 43 }
                                                    }
                                                }],
                                                range: [36, 44],
                                                loc: {
                                                    start: { line: 1, column: 36 },
                                                    end: { line: 1, column: 44 }
                                                }
                                            },
                                            range: [31, 44],
                                            loc: {
                                                start: { line: 1, column: 31 },
                                                end: { line: 1, column: 44 }
                                            }
                                        }],
                                        range: [22, 45],
                                        loc: {
                                            start: { line: 1, column: 22 },
                                            end: { line: 1, column: 45 }
                                        }
                                    },
                                    range: [19, 45],
                                    loc: {
                                        start: { line: 1, column: 19 },
                                        end: { line: 1, column: 45 }
                                    }
                                }],
                                range: [10, 46],
                                loc: {
                                    start: { line: 1, column: 10 },
                                    end: { line: 1, column: 46 }
                                }
                            },
                            range: [7, 46],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 46 }
                            }
                        },
                        range: [5, 46],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 46 }
                        }
                    },
                    range: [4, 46],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 46 }
                    }
                },
                init: null,
                range: [4, 46],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 46 }
                }
            }],
            kind: 'var',
            range: [0, 46],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 46 }
            }
        },
        'var a: number[]': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ArrayTypeAnnotation',
                            elementType: {
                                type: 'NumberTypeAnnotation',
                                range: [7, 13],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 13 }
                                }
                            },
                            range: [7, 15],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 15 }
                            }
                        },
                        range: [5, 15],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    range: [4, 15],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 15 }
                    }
                },
                init: null,
                range: [4, 15],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 15 }
                }
            }],
            kind: 'var',
            range: [0, 15],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 15 }
            }
        },
        'var a: ?string[]': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'NullableTypeAnnotation',
                            typeAnnotation: {
                                type: 'ArrayTypeAnnotation',
                                elementType: {
                                    type: 'StringTypeAnnotation',
                                    range: [8, 14],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                range: [8, 16],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 16 }
                                }
                            },
                            range: [7, 16],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 16 }
                            }
                        },
                        range: [5, 16],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    range: [4, 16],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 16 }
                    }
                },
                init: null,
                range: [4, 16],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 16 }
                }
            }],
            kind: 'var',
            range: [0, 16],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 16 }
            }
        },
        'var a: Promise<bool>[]': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'ArrayTypeAnnotation',
                            elementType: {
                                type: 'GenericTypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'Promise',
                                    range: [7, 14],
                                    loc: {
                                        start: { line: 1, column: 7 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                typeParameters: {
                                    type: 'TypeParameterInstantiation',
                                    params: [{
                                        type: 'BooleanTypeAnnotation',
                                        range: [15, 19],
                                        loc: {
                                            start: { line: 1, column: 15 },
                                            end: { line: 1, column: 19 }
                                        }
                                    }],
                                    range: [14, 20],
                                    loc: {
                                        start: { line: 1, column: 14 },
                                        end: { line: 1, column: 20 }
                                    }
                                },
                                range: [7, 20],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 20 }
                                }
                            },
                            range: [7, 22],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 22 }
                            }
                        },
                        range: [5, 22],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 22 }
                        }
                    },
                    range: [4, 22],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 22 }
                    }
                },
                init: null,
                range: [4, 22],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 22 }
                }
            }],
            kind: 'var',
            range: [0, 22],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 22 }
            }
        },
        'var a:(...rest:Array<number>) => number': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'FunctionTypeAnnotation',
                            params: [],
                            returnType: {
                                type: 'NumberTypeAnnotation',
                                range: [33, 39],
                                loc: {
                                    start: { line: 1, column: 33 },
                                    end: { line: 1, column: 39 }
                                }
                            },
                            rest: {
                                type: 'FunctionTypeParam',
                                name: {
                                    type: 'Identifier',
                                    name: 'rest',
                                    range: [10, 14],
                                    loc: {
                                        start: { line: 1, column: 10 },
                                        end: { line: 1, column: 14 }
                                    }
                                },
                                typeAnnotation: {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'Array',
                                        range: [15, 20],
                                        loc: {
                                            start: { line: 1, column: 15 },
                                            end: { line: 1, column: 20 }
                                        }
                                    },
                                    typeParameters: {
                                        type: 'TypeParameterInstantiation',
                                        params: [{
                                            type: 'NumberTypeAnnotation',
                                            range: [21, 27],
                                            loc: {
                                                start: { line: 1, column: 21 },
                                                end: { line: 1, column: 27 }
                                            }
                                        }],
                                        range: [20, 28],
                                        loc: {
                                            start: { line: 1, column: 20 },
                                            end: { line: 1, column: 28 }
                                        }
                                    },
                                    range: [15, 28],
                                    loc: {
                                        start: { line: 1, column: 15 },
                                        end: { line: 1, column: 28 }
                                    }
                                },
                                optional: false,
                                range: [10, 28],
                                loc: {
                                    start: { line: 1, column: 10 },
                                    end: { line: 1, column: 28 }
                                }
                            },
                            typeParameters: null,
                            range: [6, 39],
                            loc: {
                                start: { line: 1, column: 6 },
                                end: { line: 1, column: 39 }
                            }
                        },
                        range: [5, 39],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [4, 39],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 39 }
                    }
                },
                init: null,
                range: [4, 39],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 39 }
                }
            }],
            kind: 'var',
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },
        'var identity: <T>(x: T) => T': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'identity',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'FunctionTypeAnnotation',
                            params: [{
                                type: 'FunctionTypeParam',
                                name: {
                                    type: 'Identifier',
                                    name: 'x',
                                    range: [18, 19],
                                    loc: {
                                        start: { line: 1, column: 18 },
                                        end: { line: 1, column: 19 }
                                    }
                                },
                                typeAnnotation: {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'T',
                                        range: [21, 22],
                                        loc: {
                                            start: { line: 1, column: 21 },
                                            end: { line: 1, column: 22 }
                                        }
                                    },
                                    typeParameters: null,
                                    range: [21, 22],
                                    loc: {
                                        start: { line: 1, column: 21 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                optional: false,
                                range: [18, 22],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 22 }
                                }
                            }],
                            returnType: {
                                type: 'GenericTypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'T',
                                    range: [27, 28],
                                    loc: {
                                        start: { line: 1, column: 27 },
                                        end: { line: 1, column: 28 }
                                    }
                                },
                                typeParameters: null,
                                range: [27, 28],
                                loc: {
                                    start: { line: 1, column: 27 },
                                    end: { line: 1, column: 28 }
                                }
                            },
                            rest: null,
                            typeParameters: {
                                type: 'TypeParameterDeclaration',
                                params: [{
                                    type: 'Identifier',
                                    name: 'T',
                                    range: [15, 16],
                                    loc: {
                                        start: { line: 1, column: 15 },
                                        end: { line: 1, column: 16 }
                                    }
                                }],
                                range: [14, 17],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 17 }
                                }
                            },
                            range: [14, 28],
                            loc: {
                                start: { line: 1, column: 14 },
                                end: { line: 1, column: 28 }
                            }
                        },
                        range: [12, 28],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 28 }
                        }
                    },
                    range: [4, 28],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 28 }
                    }
                },
                init: null,
                range: [4, 28],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 28 }
                }
            }],
            kind: 'var',
            range: [0, 28],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 28 }
            }
        },
        'var identity: <T>(x: T, ...y:T[]) => T': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'identity',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        typeAnnotation: {
                            type: 'FunctionTypeAnnotation',
                            params: [{
                                type: 'FunctionTypeParam',
                                name: {
                                    type: 'Identifier',
                                    name: 'x',
                                    range: [18, 19],
                                    loc: {
                                        start: { line: 1, column: 18 },
                                        end: { line: 1, column: 19 }
                                    }
                                },
                                typeAnnotation: {
                                    type: 'GenericTypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'T',
                                        range: [21, 22],
                                        loc: {
                                            start: { line: 1, column: 21 },
                                            end: { line: 1, column: 22 }
                                        }
                                    },
                                    typeParameters: null,
                                    range: [21, 22],
                                    loc: {
                                        start: { line: 1, column: 21 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                optional: false,
                                range: [18, 22],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 22 }
                                }
                            }],
                            returnType: {
                                type: 'GenericTypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'T',
                                    range: [37, 38],
                                    loc: {
                                        start: { line: 1, column: 37 },
                                        end: { line: 1, column: 38 }
                                    }
                                },
                                typeParameters: null,
                                range: [37, 38],
                                loc: {
                                    start: { line: 1, column: 37 },
                                    end: { line: 1, column: 38 }
                                }
                            },
                            rest: {
                                type: 'FunctionTypeParam',
                                name: {
                                    type: 'Identifier',
                                    name: 'y',
                                    range: [27, 28],
                                    loc: {
                                        start: { line: 1, column: 27 },
                                        end: { line: 1, column: 28 }
                                    }
                                },
                                typeAnnotation: {
                                    type: 'ArrayTypeAnnotation',
                                    elementType: {
                                        type: 'GenericTypeAnnotation',
                                        id: {
                                            type: 'Identifier',
                                            name: 'T',
                                            range: [29, 30],
                                            loc: {
                                                start: { line: 1, column: 29 },
                                                end: { line: 1, column: 30 }
                                            }
                                        },
                                        typeParameters: null,
                                        range: [29, 30],
                                        loc: {
                                            start: { line: 1, column: 29 },
                                            end: { line: 1, column: 30 }
                                        }
                                    },
                                    range: [29, 32],
                                    loc: {
                                        start: { line: 1, column: 29 },
                                        end: { line: 1, column: 32 }
                                    }
                                },
                                optional: false,
                                range: [27, 32],
                                loc: {
                                    start: { line: 1, column: 27 },
                                    end: { line: 1, column: 32 }
                                }
                            },
                            typeParameters: {
                                type: 'TypeParameterDeclaration',
                                params: [{
                                    type: 'Identifier',
                                    name: 'T',
                                    range: [15, 16],
                                    loc: {
                                        start: { line: 1, column: 15 },
                                        end: { line: 1, column: 16 }
                                    }
                                }],
                                range: [14, 17],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 17 }
                                }
                            },
                            range: [14, 38],
                            loc: {
                                start: { line: 1, column: 14 },
                                end: { line: 1, column: 38 }
                            }
                        },
                        range: [12, 38],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 38 }
                        }
                    },
                    range: [4, 38],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 38 }
                    }
                },
                init: null,
                range: [4, 38],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 38 }
                }
            }],
            kind: 'var',
            range: [0, 38],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 38 }
            }
        },
        'import type foo from "bar";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportDefaultSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'foo',
                    range: [12, 15],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 15 }
                    }
                },
                range: [12, 15],
                loc: {
                    start: { line: 1, column: 12 },
                    end: { line: 1, column: 15 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'bar',
                raw: '"bar"',
                range: [21, 26],
                loc: {
                    start: { line: 1, column: 21 },
                    end: { line: 1, column: 26 }
                }
            },
            importKind: 'type',
            range: [0, 27],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 27 }
            }
        },
        'import type {foo, bar} from "baz";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'foo',
                    range: [13, 16],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 16 }
                    }
                },
                name: null,
                range: [13, 16],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 16 }
                }
            }, {
                type: 'ImportSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'bar',
                    range: [18, 21],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 21 }
                    }
                },
                name: null,
                range: [18, 21],
                loc: {
                    start: { line: 1, column: 18 },
                    end: { line: 1, column: 21 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'baz',
                raw: '"baz"',
                range: [28, 33],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 33 }
                }
            },
            importKind: 'type',
            range: [0, 34],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 34 }
            }
        },
        'import type {foo as bar} from "baz";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'foo',
                    range: [13, 16],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 16 }
                    }
                },
                name: {
                    type: 'Identifier',
                    name: 'bar',
                    range: [20, 23],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 23 }
                    }
                },
                range: [13, 23],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 23 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'baz',
                raw: '"baz"',
                range: [30, 35],
                loc: {
                    start: { line: 1, column: 30 },
                    end: { line: 1, column: 35 }
                }
            },
            importKind: 'type',
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },
        'import type from "foo";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportDefaultSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'type',
                    range: [7, 11],
                    loc: {
                        start: { line: 1, column: 7 },
                        end: { line: 1, column: 11 }
                    }
                },
                range: [7, 11],
                loc: {
                    start: { line: 1, column: 7 },
                    end: { line: 1, column: 11 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'foo',
                raw: '"foo"',
                range: [17, 22],
                loc: {
                    start: { line: 1, column: 17 },
                    end: { line: 1, column: 22 }
                }
            },
            importKind: 'value',
            range: [0, 23],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 23 }
            }
        },
        'import type, {foo} from "bar";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportDefaultSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'type',
                    range: [7, 11],
                    loc: {
                        start: { line: 1, column: 7 },
                        end: { line: 1, column: 11 }
                    }
                },
                range: [7, 11],
                loc: {
                    start: { line: 1, column: 7 },
                    end: { line: 1, column: 11 }
                }
            }, {
                type: 'ImportSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'foo',
                    range: [14, 17],
                    loc: {
                        start: { line: 1, column: 14 },
                        end: { line: 1, column: 17 }
                    }
                },
                name: null,
                range: [14, 17],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 17 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'bar',
                raw: '"bar"',
                range: [24, 29],
                loc: {
                    start: { line: 1, column: 24 },
                    end: { line: 1, column: 29 }
                }
            },
            importKind: 'value',
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },
        'import type * as namespace from "bar";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportNamespaceSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'namespace',
                    range: [17, 26],
                    loc: {
                        start: { line: 1, column: 17 },
                        end: { line: 1, column: 26 }
                    }
                },
                range: [12, 26],
                loc: {
                    start: { line: 1, column: 12 },
                    end: { line: 1, column: 26 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'bar',
                raw: '"bar"',
                range: [32, 37],
                loc: {
                    start: { line: 1, column: 32 },
                    end: { line: 1, column: 37 }
                }
            },
            importKind: 'type',
            range: [0, 38],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 38 }
            }
        },
        'import typeof foo from "bar";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportDefaultSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'foo',
                    range: [14, 17],
                    loc: {
                        start: { line: 1, column: 14 },
                        end: { line: 1, column: 17 }
                    }
                },
                range: [14, 17],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 17 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'bar',
                raw: '"bar"',
                range: [23, 28],
                loc: {
                    start: { line: 1, column: 23 },
                    end: { line: 1, column: 28 }
                }
            },
            importKind: 'typeof',
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },
        'import typeof {foo, bar} from "baz";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'foo',
                    range: [15, 18],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 18 }
                    }
                },
                name: null,
                range: [15, 18],
                loc: {
                    start: { line: 1, column: 15 },
                    end: { line: 1, column: 18 }
                }
            }, {
                type: 'ImportSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'bar',
                    range: [20, 23],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 23 }
                    }
                },
                name: null,
                range: [20, 23],
                loc: {
                    start: { line: 1, column: 20 },
                    end: { line: 1, column: 23 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'baz',
                raw: '"baz"',
                range: [30, 35],
                loc: {
                    start: { line: 1, column: 30 },
                    end: { line: 1, column: 35 }
                }
            },
            importKind: 'typeof',
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },
        'import typeof {foo as bar} from "baz";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'foo',
                    range: [15, 18],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 18 }
                    }
                },
                name: {
                    type: 'Identifier',
                    name: 'bar',
                    range: [22, 25],
                    loc: {
                        start: { line: 1, column: 22 },
                        end: { line: 1, column: 25 }
                    }
                },
                range: [15, 25],
                loc: {
                    start: { line: 1, column: 15 },
                    end: { line: 1, column: 25 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'baz',
                raw: '"baz"',
                range: [32, 37],
                loc: {
                    start: { line: 1, column: 32 },
                    end: { line: 1, column: 37 }
                }
            },
            importKind: 'typeof',
            range: [0, 38],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 38 }
            }
        },
        'import typeof * as namespace from "bar";': {
            type: 'ImportDeclaration',
            specifiers: [{
                type: 'ImportNamespaceSpecifier',
                id: {
                    type: 'Identifier',
                    name: 'namespace',
                    range: [19, 28],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 28 }
                    }
                },
                range: [14, 28],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 28 }
                }
            }],
            source: {
                type: 'Literal',
                value: 'bar',
                raw: '"bar"',
                range: [34, 39],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 39 }
                }
            },
            importKind: 'typeof',
            range: [0, 40],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 40 }
            }
        },
    },
"plus":{
"var a: number, s: string, obj: Namespace.Class":   {
   "type": "VariableDeclaration",
    "declarations": [
      {
        "type": "VariableDeclarator",
        "id": {
          "type": "Identifier",
          "name": "a",
          "typeAnnotation": {
            "type": "TypeAnnotation",
            "typeAnnotation": {
              "type": "NumberTypeAnnotation",
              "range": [
                7,
                13
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              }
            },
            "range": [
              5,
              13
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 5
              },
              "end": {
                "line": 1,
                "column": 13
              }
            }
          },
          "range": [
            4,
            13
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        "init": null,
        "range": [
          4,
          13
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 4
          },
          "end": {
            "line": 1,
            "column": 13
          }
        }
      },
      {
        "type": "VariableDeclarator",
        "id": {
          "type": "Identifier",
          "name": "s",
          "typeAnnotation": {
            "type": "TypeAnnotation",
            "typeAnnotation": {
              "type": "StringTypeAnnotation",
              "range": [
                18,
                24
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 18
                },
                "end": {
                  "line": 1,
                  "column": 24
                }
              }
            },
            "range": [
              16,
              24
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 16
              },
              "end": {
                "line": 1,
                "column": 24
              }
            }
          },
          "range": [
            15,
            24
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 15
            },
            "end": {
              "line": 1,
              "column": 24
            }
          }
        },
        "init": null,
        "range": [
          15,
          24
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 1,
            "column": 24
          }
        }
      },
      {
        "type": "VariableDeclarator",
        "id": {
          "type": "Identifier",
          "name": "obj",
          "typeAnnotation": {
            "type": "TypeAnnotation",
            "typeAnnotation": {
              "type": "GenericTypeAnnotation",
              "id": {
                "type": "QualifiedTypeIdentifier",
                "qualification": {
                  "type": "Identifier",
                  "name": "Namespace",
                  "range": [
                    31,
                    40
                  ],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 31
                    },
                    "end": {
                      "line": 1,
                      "column": 40
                    }
                  }
                },
                "id": {
                  "type": "Identifier",
                  "name": "Class",
                  "range": [
                    41,
                    46
                  ],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 41
                    },
                    "end": {
                      "line": 1,
                      "column": 46
                    }
                  }
                },
                "range": [
                  31,
                  46
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 31
                  },
                  "end": {
                    "line": 1,
                    "column": 46
                  }
                }
              },
              "typeParameters": null,
              "range": [
                31,
                46
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 31
                },
                "end": {
                  "line": 1,
                  "column": 46
                }
              }
            },
            "range": [
              29,
              46
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 29
              },
              "end": {
                "line": 1,
                "column": 46
              }
            }
          },
          "range": [
            26,
            46
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 46
            }
          }
        },
        "init": null,
        "range": [
          26,
          46
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 26
          },
          "end": {
            "line": 1,
            "column": 46
          }
        }
      }
    ],
    "kind": "var",
    "range": [
      0,
      46
    ],
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 1,
        "column": 46
      }
    }
  }
}};

function updateDeeply(target, override) {
    var key, val;

    function isHashObject(target) {
        return typeof target === 'object' && target instanceof Object && !(target instanceof RegExp);
    }

    for (key in override) {
        if (override.hasOwnProperty(key)) {
            val = override[key];
            if (isHashObject(val)) {
                if (isHashObject(target[key])) {
                    updateDeeply(target[key], val);
                } else {
                    target[key] = updateDeeply({}, val);
                }
            } else {
                target[key] = val;
            }
        }
    }
    return target;
}

// Special handling for regular expression literal since we need to
// convert it to a string literal, otherwise it will be decoded
// as object "{}" and the regular expression would be lost.
function adjustRegexLiteral(key, value) {
    'use strict';
    if (key === 'value' && value instanceof RegExp) {
        value = value.toString();
    }
    return value;
}

function testIdentity(code, syntax) {
    'use strict';
    var expected, tree, actual, actual2, options, StringObject;

    // alias, so that JSLint does not complain.
    StringObject = String;

    options = {
        comment: false,
        range: false,
        loc: false,
        tokens: false,
        raw: false
    };

    tree = esprima.parse(code, options);
    expected = JSON.stringify(tree, adjustRegexLiteral, 4);
    tree = esprima.parse(escodegen.generate(tree), options);
    actual = JSON.stringify(tree, adjustRegexLiteral, 4);
    tree = esprima.parse(escodegen.generate(syntax), options);
    actual2 = JSON.stringify(tree, adjustRegexLiteral, 4);
    expect(actual).to.be.equal(expected);
    expect(actual2).to.be.equal(expected);
}

function testGenerate(expected, result) {
    'use strict';
    var actual, options;

    options = {
        indent: '    ',
        parse: esprima.parse
    };

    if (result.options) {
        options = updateDeeply(options, result.options);
    }

    actual = escodegen.generate(result.generateFrom, options);
    expect(actual).to.be.equal(expected);
}

function isGeneratorIdentityFixture(result) {
    'use strict';
    return !result.hasOwnProperty('generateFrom') &&
        !result.hasOwnProperty('result');
}

function runTest(code, result) {
    'use strict';
    var actual = escodegen.generate(result, {format: {compact: true}});
    var expected = code;
  debugger;
    expect(clean(actual)).to.be.equal(clean(expected));
  
  function clean(s){
    s = s.replace('boolean', 'bool');
    s = s.replace(/\s*:\s*/g,':');
    s = s.replace(/\s*=\s*/g,'=');
    s = s.replace(/\s*,\s*/g,',');
    s = s.replace(/\s*;\s*/g,';');
    s = s.replace(/\s*\|\s*/g,'|');
    s = s.replace(/\s*\{\s*/g,'{');
    s = s.replace(/\s*\}\s*/g,'}');
    s = s.replace(/\s*\(\s*/g,'(');
    s = s.replace(/\s*\)\s*/g,')');
    s = s.replace(/\s*\[\s*/g,'[');
    s = s.replace(/\s*\]\s*/g,']');
    s = s.replace(/\s*\<\s*/g,'<');
    s = s.replace(/\s*\>\s*/g,'>');
    s = s.replace(/\s*;\s*$/g,'');
    s = s.replace(/"/g,"'");
    s = s.replace(/\s*;\s*\}\s*/g,'}');
    s = s.replace(/\bfrom '/g,"from'");
    s = s.replace(/\*\s*as/g,"* as");
    return s;
  }
}

describe('type annotations from esprima-fb/test/fb-tests', function () {
    Object.keys(data).forEach(function (category) {
        Object.keys(data[category]).forEach(function (source) {
            if (/^\*\*\*/.test(source))
              xit(category+source)
            else it(category+source, function () {
                var expected = data[category][source];
                expected = inject_program_on_fb_test(expected);
                runTest(source, expected);
            });
        });
    });
});

function inject_program_on_fb_test(node) {
    return {
        type: 'Program',
        body: [node],
        range: node.range,
        loc: node.loc
    };
}
/* vim: set sw=4 ts=4 et tw=80 : */
